@echo off
echo loading...

start cmd /k "node characterai_server.js"

timeout /t 8 /nobreak

start cmd /k "python clown_0.41.py"

@pause
