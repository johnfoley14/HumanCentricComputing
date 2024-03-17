/* eslint-disable no-undef */
// backend/server.js
const { RedshiftDataClient } = require("@aws-sdk/client-redshift-data");
const express = require('express');
const mqtt = require('mqtt');
const cors = require('cors');
const { Client } = require('pg');
const port = 3000;
const ip_address= '44.214.124.65';


// eslint-disable-next-line no-unused-vars
const redshiftDataApiClient = new RedshiftDataClient({ region: "us-east-1" });

const client = new Client({

user: 'awsuser',
host: 'smart-reels.cvacxyig1fg6.us-east-1.redshift.amazonaws.com',
database: 'dev',
password: '$V1p__OsfbjGEDk*',
port: '5439',

});

client.connect();


const app = express();
app.use(express.json());


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
let lightRecords = [];
let soundRecords = [];

mqttClient.on('message', (topic, message) => {
  if (topic === lightTopic) {
    lightValue = message.toString();
    insertLightRecords(lightValue);
    // You can do additional processing here if needed
  } else if (topic === soundTopic) {
    soundValue = message.toString();
    insertSoundRecords(soundValue);
    // You can do additional processing here if needed
  } else if (topic === blindStateTopic) {
    blindValue = message.toString();
    // You can do additional processing here if needed
  }
});

async function getLightRecords() {
    const query = 'SELECT * FROM light_sensor_records ORDER BY time DESC LIMIT 200;';
    let results;
    try {
      results = await client.query(query);
      console.log(`Received latest light records!`);
    } catch (error) {
      console.error('Error retrieving light records:', error);
    }
    return results.rows;
}

async function insertLightRecords(reading) {
    const lightRecord = {
        value: parseInt(reading),
        time: new Date().toISOString(),
    }
    if (lightRecords.length < 250) {
        lightRecords.push(lightRecord);
    }
    else {
        const lightNum = lightRecords.length;
        const insertStatement = createInsertStatement(lightRecords, 'light_sensor_records');
        lightRecords = []
        console.log(insertStatement);
        try {
            await client.query(insertStatement);
            console.log(`Successfully inserted ${lightNum} light records!`);
          } catch (error) {
            console.error('Error inserting data:', error);
          }
    }
}

function insertSoundRecords(reading){
    const soundRecord = {
        value: parseInt(reading),
        time: new Date().toISOString(),
    }
    if (soundRecords.length < 250) {
        soundRecords.push(soundRecord);
    }
    else {
        const soundNum = soundRecords.length;
        const insertStatement = createInsertStatement(soundRecords, 'sound_sensor_records');
        soundRecords = []
        console.log(insertStatement);
        try {
            client.query(insertStatement);
            console.log(`Successfully inserted ${soundNum} sound records!`);
          } catch (error) {
            console.error('Error inserting data:', error);
          }
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

app.get('/light_records', async (req, res) => {
  try {
    let lightRecords = await getLightRecords();
    res.json({ data: lightRecords });
  } catch (error) {
    console.error('Error getting light records:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.post('/register', (req, res) => {
    const userData = req.body; 
    console.log(userData);
    const insertUserStatement = createRegisterStatement(userData);
    try {
        client.query(insertUserStatement);
        console.log(`Successfully inserted user ${userData.username}!`);
        res.send('User created successfully');

      } catch (error) {
        console.error('Error adding user :', error);
        res.send('User created successfully');
      }
  });
  

app.listen(port, '0.0.0.0' , () => {
  console.log(`Server listening at http://${ip_address}:${port}`);
});

function createRegisterStatement(userData) {
  return `
    INSERT INTO users (username, email, password)
    VALUES ('${userData.username}', '${userData.email}', '${userData.password}')
  `;
}

function createInsertStatement(lightRecords, table_name) {
  const valuePlaceholders = lightRecords.map(record => `(${record.value}, '${record.time}')`);
  const joinedPlaceholders = valuePlaceholders.join(', ');

  return `
    INSERT INTO ${table_name} (value, time)
    VALUES ${joinedPlaceholders}
  `;
}


  