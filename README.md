# clown 0.4
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
## next lets edit file ```(characterai_server)``` shall we?

```try to find inside file:```
authenticateWithToken("YOUR TOKEN HERE") ```AND``` characterId = "YOUR CHAR ID"

***here are tutorial how to get your token***
- go to ➡️ https://old.character.ai
- ctrl + shift + i
- and js copy a token like me
![image](https://github.com/FoxVFoxyF/clown/assets/121633580/70f31549-ddf2-4e05-98d1-679b28c0fed7)
**remember to login on old.character to see token!!**

***and here how to get character id***
- go on chat with ai and copy marked text
![image](https://github.com/FoxVFoxyF/clown/assets/121633580/7677769f-59f1-4a80-9be5-13cc717486c3)
char=```jOmCBZ2nzYYMTfNyCsZgLnzDe9jmNSzCepGKtmeV0ms```&source=recent-chats


## now lets edit last file ```clown_0.2``` 

**frist make a blow job and jk** ```try to find ⏬(it will be high)``` 

token = "YOUR TOKEN HERE" ```AND```
channel_id = "CHANNEL ID"

![image](https://github.com/FoxVFoxyF/clown/assets/121633580/89bb8580-1c5d-45fe-8f3c-0bffd0fe8ec0)
***here are tutorial how to get another token***
- open discord in web(dont close always keep open...sorry) and enable dev mode just like me
![image](https://github.com/FoxVFoxyF/clown/assets/121633580/649743bc-514c-4fa7-b665-bb074b224d84)
- next go where you can type(i prefer dm)
- press ctrl + shift + i and type something 
- from messages/authorization take your token(idk how to explain, soo here are img)```yup my alt got muted cuz ai was ✨retarded✨ ```
![image](https://github.com/FoxVFoxyF/clown/assets/121633580/649d395b-1cff-4857-94b3-6e4d8e2c1e7c)



**to get channel id** just press right on channel and click ```copy channel id```
![image](https://github.com/FoxVFoxyF/clown/assets/121633580/d6632b7b-afe0-4e54-91a9-63a2f652e2e2)
```channel id is place where ai will be```

## Cloner should work(dont test, read note!)

> [!NOTE]
> here are info how to configurate (clown file)
```py
token = "jaja czarnucha" # we have this
channel_id = "2137" # same 🔼
username_to_ignore = 'bigwhiteguy' # your @ bot
check_for_prefix = True # check that selected prefix will be checked
prefix = "." # example: if user send msg like .hello! program will send this to c.ai but if user send hello he will be ignored
```
RUN VIA runner.bat



