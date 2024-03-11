/* eslint-disable no-undef */
// backend/server.js
const express = require('express');
const mqtt = require('mqtt');

const app = express();
const port = 3001; // Choose an available port

const mqttBroker = 'mqtt://54.160.225.31'; // Replace with your MQTT broker address
const mqttTopic = 'light_sensor_value';

const mqttClient = mqtt.connect(mqttBroker);

mqttClient.on('connect', () => {
    mqttClient.subscribe(mqttTopic);
});

let lastReceivedData = '';

mqttClient.on('message', (topic, message) => {
  if (topic === mqttTopic) {
    lastReceivedData = message.toString();
    // You can do additional processing here if needed
  }
});

app.get('/data', (req, res) => {
  res.json({ data: lastReceivedData });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
