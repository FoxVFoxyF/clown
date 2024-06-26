import websocket
import colorama
from colorama import Fore, Style
import json
import threading
import time
import requests

with open('config.json') as config_file:
    config = json.load(config_file)

token = config["dc_token"]
channel_id = config["channel_id"]
username_to_ignore = config['username_to_ignore']
check_for_prefix = config['check_for_prefix']
prefix = config['prefix']
print_user_messages = config['print_user_messages']
print_ai_messages = config['print_ai_messages']
recognize_users = config['recognize_users']


def send_json_request(ws, request):
    ws.send(json.dumps(request))

def receive_json_response(ws):
    try:
        response = ws.recv()
        if response:
            return json.loads(response)
    except websocket.WebSocketConnectionClosedException:
        pass
    except Exception as e:
        pass

def heartbeat(interval, ws):
    while True:
        time.sleep(interval)
        heartbeatJSON = {
            "op": 1,
            "d": None
        }
        send_json_request(ws, heartbeatJSON)

def remove_prefix(text, prefix):
    if text.startswith(prefix):
        return text[len(prefix):].lstrip()
    return text

ws = websocket.WebSocket()
ws.connect('wss://gateway.discord.gg/?v=6&encoding=json')
event = receive_json_response(ws)

if event:
    print(Fore.MAGENTA + Style.BRIGHT + "connected :)" + Style.RESET_ALL)

    heartbeat_interval = event['d']['heartbeat_interval'] / 1000
    threading._start_new_thread(heartbeat, (heartbeat_interval, ws))

    payload = {
        'op': 2,
        "d": {
            "token": token,
            "properties": {
                "$os": "windows",
                "$browser": "chrome",
                "$device": 'pc'
            }
        }
    }

    send_json_request(ws, payload)

while True:
    event = receive_json_response(ws)
    try:
        if event is not None:
            if 'd' in event and 'channel_id' in event['d'] and event['d']['channel_id'] == channel_id:
                username = event['d']['author']['username']
                content = event['d']['content']
                if username != username_to_ignore:
                    if recognize_users:
                        user_message = f"{username}: {content}"
                    elif not recognize_users:
                        user_message = content

                    if print_user_messages:
                        if check_for_prefix and content.startswith(prefix):
                            user_message = remove_prefix(user_message, prefix)
                            print(Fore.BLUE + Style.BRIGHT + "user" + Style.RESET_ALL, Fore.YELLOW + Style.BRIGHT + user_message + Style.RESET_ALL)
                        elif check_for_prefix and not content.startswith(prefix):
                            continue
                        else:
                            print(Fore.BLUE + Style.BRIGHT + "user" + Style.RESET_ALL, Fore.YELLOW + Style.BRIGHT + user_message + Style.RESET_ALL)
 
                    url = "http://127.0.0.1:3000/send-message"
                    headers = {"Content-Type": "application/json"}
                    data = {"message": user_message}
                    response = requests.post(url, headers=headers, json=data)
                    if response.status_code == 200:
                        assistant_message = response.json()['response']
                        if print_ai_messages:
                            print(Fore.BLUE +  Style.BRIGHT + "AI" + Style.RESET_ALL, Fore.YELLOW + Style.BRIGHT + assistant_message + Style.RESET_ALL)
                        payload = {'content': assistant_message}
                        header = {'authorization': token}
                        r = requests.post(f'https://discord.com/api/v9/channels/{channel_id}/messages', data=payload, headers=header)
                    else:
                        print(Fore.RED + "Failed to get response from CharacterAI server" + Style.RESET_ALL)
    except KeyError:
        pass
    except Exception:
        pass

else:
    print(Fore.RED + Style.BRIGHT + "discord gateway, bad" + Style.RESET_ALL)
