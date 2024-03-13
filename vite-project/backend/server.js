/* eslint-disable no-undef */
// backend/server.js
const { RedshiftDataClient } = require("@aws-sdk/client-redshift-data");
const express = require('express');
const mqtt = require('mqtt');
const cors = require('cors');
const { Client } = require('pg');
const port = 3000;
const ip_address= '54.144.92.52';



// eslint-disable-next-line no-unused-vars
const redshiftDataApiClient = new RedshiftDataClient({ region: "us-east-1" });

const client = new Client({

user: 'awsuser',
// Host probably changes everytime I restart the learner lab
host: 'smart-reels.cvacxyig1fg6.us-east-1.redshift.amazonaws.com',
database: 'dev',
password: '$V1p__OsfbjGEDk*',
port: '5439',

});

client.connect();


const app = express();

app.use(cors());

const mqttBroker = `mqtt://${ip_address}`; // Replace with your MQTT broker address
const lightTopic  = "light_sensor_value";
const soundTopic  = "sound_sensor_value";
const blindStateTopic  = "blind_state";

const mqttClient = mqtt.connect(mqttBroker);

mqttClient.on('connect', () => {
    mqttClient.subscribe(lightTopic);
    mqttClient.subscribe(soundTopic);
    mqttClient.subscribe(blindStateTopic);
    console.log('Connected to MQTT broker topics');
});

let lightValue = 'No data available';
let soundValue = 'No data available';
let blindValue = 'No data available';

mqttClient.on('message', (topic, message) => {
  if (topic === lightTopic) {
    lightValue = message.toString();
    insertLightRecords(lightValue);
    console.log(`Received message on topic ${topic}: ${message.toString()}`);
    // You can do additional processing here if needed
  } else if (topic === soundTopic) {
    soundValue = message.toString();
    insertSoundRecords(soundValue);
    console.log(`Received message on topic ${topic}: ${message.toString()}`);
    // You can do additional processing here if needed
  } else if (topic === blindStateTopic) {
    blindValue = message.toString();
    console.log(`Received message on topic ${topic}: ${message.toString()}`);
    // You can do additional processing here if needed
  }
});


let lightRecords = [];
let soundRecords = [];

async function insertLightRecords(reading) {
    const lightRecord = {
        value: parseInt(reading),
        time: new Date().toISOString(),
    }
    if (lightRecords.length < 50) {
        lightRecords.push(lightRecord);
    }
    else {
        const insertStatement = createInsertStatement(lightRecords, 'light_sensor_records');
        const values = lightRecords.flatMap(record => [record.value, record.time]);
        try {
            await client.query(insertStatement, values);
            console.log('Data inserted successfully!');
          } catch (error) {
            console.error('Error inserting data:', error);
          }
        lightRecords = []
    }
}

async function insertSoundRecords(reading){
    const soundRecord = {
        value: parseInt(reading),
        time: new Date().toISOString(),
    }
    if (soundRecords.length < 50) {
        soundRecords.push(soundRecord);
    }
    else {
        const insertStatement = createInsertStatement(soundRecords, 'sound_sensor_records');
        const values = soundRecords.flatMap(record => [record.value, record.time]);
        try {
            await client.query(insertStatement, values);
            console.log('Data inserted successfully!');
          } catch (error) {
            console.error('Error inserting data:', error);
          }
          soundRecords = []
    }
}

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
  console.log(`Server listening at http://${ip_address}:${port}`);
});


function createInsertStatement(lightRecords, table_name) {
    const valuePlaceholders = lightRecords.map(() => '($1, $2)');
    const joinedPlaceholders = valuePlaceholders.join(', ');

    console.log(joinedPlaceholders);
  
    return `
      INSERT INTO ${table_name} (value, time)
      VALUES ${joinedPlaceholders}
    `;
  }
  