# its patched but i know how to fix it, please make issue request for update and i'll rewrite code 

# clown 0.45
  clown allows connect character ai to discord via alt account(NOT bot acc) program is simple and my first.
  code isnt obfuscated or complicated allat, so if you are afraid of a virus, check this or send it to [gpt4/3.5](https://chatgpt.com)
> [!IMPORTANT]
> you will need to setup whole shit

## frist install [nodejs](https://nodejs.org/en) 
```and python, for example i use 3.11 from ms store```

after installation paste to cmd 2 things..
```py
pip install websocket-client requests colorama
```
```py
npm install express body-parser node_characterai chalk
```
## next lets edit ```(config.json)``` shall we?

```tip: if you need help, my dc is foxvfoxy[en,pl]```


### ***to get dc_token***
- open discord in web(after all you can close it) and enable dev mode just like me
![image](https://github.com/FoxVFoxyF/clown/assets/121633580/649743bc-514c-4fa7-b665-bb074b224d84)
- next go where you can type(i prefer dm)
- press ctrl + shift + i and type something 
- from messages/authorization take your token(idk how to explain, soo here are img)```yup my alt got muted cuz ai was ✨retarded✨ ```
![image](https://github.com/FoxVFoxyF/clown/assets/121633580/649d395b-1cff-4857-94b3-6e4d8e2c1e7c)
### ***to get cai_token***
- go to ➡️ https://old.character.ai
- ctrl + shift + i
- and js copy a token like me
![image](https://github.com/FoxVFoxyF/clown/assets/121633580/70f31549-ddf2-4e05-98d1-679b28c0fed7)
**remember to login on old.character to see token!!**

### **to get channel id** 
- just press right on channel and ```copy channel id```
![image](https://github.com/FoxVFoxyF/clown/assets/121633580/d6632b7b-afe0-4e54-91a9-63a2f652e2e2)
```channel id is place where ai will be watching for messages```

### ***to get characterId***
- go to chat with ai and copy marked text
![image](https://github.com/FoxVFoxyF/clown/assets/121633580/7677769f-59f1-4a80-9be5-13cc717486c3)
char=```jOmCBZ2nzYYMTfNyCsZgLnzDe9jmNSzCepGKtmeV0ms```&source=recent-chats



> [!NOTE]
> before start lets configurate last things
```js
    "channel_id": "CHANNEL_ID"
    "characterId": "YOUR_CHARACTER_ID"

    "check_for_prefix": true ⬅️check that selected prefix will be checked
    "prefix": ".", ⬅️example: if user send msg like .hello! program will send this to c.ai but if user send hello he will be ignored
    
    "username_to_ignore": "big_sigma32" ⬅️your @ bot
    "recognize_users": true ⬅️ if true bot will see your msg like mydcname: hello!
    "print_user_messages": false, ⬅️bool
    "print_ai_messages": true, ⬅️bool
    "dc_token": "YOUR_TOKEN_HERE",
    "cai_token": "YOUR_TOKEN_HERE"
    
```
RUN VIA runner.bat


