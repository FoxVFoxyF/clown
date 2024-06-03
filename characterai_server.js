const express = require('express');
const bodyParser = require('body-parser');
const CharacterAI = require('node_characterai');
const characterAI = new CharacterAI();

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

(async () => {
  try {
    await characterAI.authenticateWithToken("YOUR TOKEN HERE");
    console.log("Authenticated with CharacterAI");
    const characterId = "YOUR CHAR ID";
    chat = await characterAI.createOrContinueChat(characterId);
    console.log("Chat initialized with character:", characterId);
  } catch (error) {
    console.error("Error during authentication:", error);
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
