/* eslint-disable no-undef */
// backend/server.js
import { publicIp, port } from '../src/config';
const express = require('express');
const mqtt = require('mqtt');
const cors = require('cors');

const app = express();

app.use(cors());

const mqttBroker = 'mqtt://54.221.25.182'; // Replace with your MQTT broker address
const lightTopic  = "light_sensor_value";
const soundTopic  = "sound_sensor_value";
const blindStateTopic  = "blind_state";

const mqttClient = mqtt.connect(mqttBroker);

mqttClient.on('connect', () => {
    mqttClient.subscribe(lightTopic);
    mqttClient.subscribe(soundTopic);
    mqttClient.subscribe(blindStateTopic);
});

let lightValue = 'No data available';
let soundValue = 'No data available';
let blindValue = 'No data available';

mqttClient.on('message', (topic, message) => {
  if (topic === lightTopic) {
    lightValue = message.toString();
    console.log(`Received message on topic ${topic}: ${message.toString()}`);
    // You can do additional processing here if needed
  } else if (topic === soundTopic) {
    soundValue = message.toString();
    console.log(`Received message on topic ${topic}: ${message.toString()}`);
    // You can do additional processing here if needed
  } else if (topic === blindStateTopic) {
    blindValue = message.toString();
    console.log(`Received message on topic ${topic}: ${message.toString()}`);
    // You can do additional processing here if needed
  }
});

app.get('/light_reading', (req, res) => {
  res.json({ data: lightValue });
});

app.get('/sound_reading', (req, res) => {
  res.json({ data: soundValue });
});

app.get('/blind_state', (req, res) => {
  res.json({ data: blindValue });
});

app.listen(port, '0.0.0.0' , () => {
  console.log(`Server listening at http://${publicIp}:${port}`);
});