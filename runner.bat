@echo off
echo loading...

start cmd /k "node characterai_server.js"

timeout /t 10 /nobreak

start cmd /k "python clown_0.2.py"

@pause
