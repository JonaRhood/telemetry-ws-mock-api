// server.js

require('dotenv').config();
const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const port = parseInt(process.env.PORT, 10) || 8080;

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server, path: '/ws' });


wss.on('connection', ws => {
  console.log('Cliente conectado');
});


const interval = setInterval(() => {
  let data = [];

  for (let i = 1; i <= 20; i++) {
    data.push({
      id: i,
      heartRate: Math.floor(Math.random() * 40) + 60,
      oxygen: Math.floor(Math.random() * 10) + 90,
      timestamp: new Date().toISOString(),
    });

    console.log(data);
  }

  wss.clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(data));
    }
  });

}, 2000);

app.get('/health', (req, res) => res.status(200).send('OK'));

server.listen(port, () => {
  console.log(`🚀 Server ready on http://localhost:${port}`);
});
