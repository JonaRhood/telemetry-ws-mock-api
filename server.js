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

const dataHistory = [];

const interval = setInterval(() => {
  const data = [];

  for (let i = 1; i <= 30; i++) {
    const now = new Date();
    const timestamp = now.toLocaleString("es-ES", {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
      timeZone: "Europe/Madrid",
    });

    data.push({
      id: i,
      heartRate: Math.floor(Math.random() * 40) + 60,
      oxygen: Math.floor(Math.random() * 5) + 94,
      temperature: (36 + Math.random() * 2).toFixed(1),
      respirationRate: Math.floor(Math.random() * 6) + 12,
      bloodPressure: {
        systolic: Math.floor(Math.random() * 20) + 100,
        diastolic: Math.floor(Math.random() * 10) + 60,
      },
      glucose: Math.floor(Math.random() * 40) + 80,
      ecgSignal: Array.from({ length: 20 }, () =>
        parseFloat((Math.random() * 2 - 1).toFixed(2))
      ),
      timestamp,
    });
  }

  dataHistory.push({data});

  wss.clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify({
        latest: data,        
        history: dataHistory  
      }));
    }
  });

}, 1000);

app.get('/health', (req, res) => res.status(200).send('OK'));

server.listen(port, () => {
  console.log(`🚀 Server ready on http://localhost:${port}`);
});
