const express = require('express');
const bodyParser = require('body-parser');
const CharacterAI = require('node_characterai');
const characterAI = new CharacterAI();
const chalk = import('chalk');
const fs = require('fs').promises;

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.get('/', (req, res) => {
  console.log('GET request received');
  res.send('Server is running');
});

app.get('/send-message', (req, res) => {
  res.send('xDD');
});

let chat;
let config;

(async () => {
  const chalk = await import('chalk');
  try {
    const data = await fs.readFile('config.json', 'utf8');
    config = JSON.parse(data);
    await characterAI.authenticateWithToken(config.cai_token);
    console.log(chalk.default.blueBright('Authenticated with CharacterAI'));

    chat = await characterAI.createOrContinueChat(config.characterId);
    console.log(chalk.default.greenBright("Chat initialized with character:", config.characterId));
    console.log(chalk.default.magentaBright("keep this in background +"));
  } catch (error) {
    console.error(chalk.default.redBright("Error during authentication or reading config file:", error));
  }
})();


app.post('/send-message', async (req, res) => {
  try {
    const message = req.body.message;
    console.log("Received message from client:", message);

    if (!chat) {
      res.status(500).send("Chat not initialized");
      return;
    }

    console.log("Sending message to CharacterAI:", message);
    const response = await chat.sendAndAwaitResponse(message, true);
    console.log("Received response from CharacterAI:", response);

    res.setHeader('Content-Type', 'application/json');
    res.json({ response: response.text });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("An error occurred");
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
