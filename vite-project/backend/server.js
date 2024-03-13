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
host: 'smart-reels.cvacxyig1fg6.us-east-1.redshift.amazonaws.com:5439/dev',
database: 'dev',
password: '$V1p__OsfbjGEDk*',
port: '5439',

});

client.connect();



// var sqlStatements = ["SELECT * FROM your_table WHERE your_condition"];const params = {	Database: "your_database",	Sqls: sqlStatements};const command = new BatchExecuteStatementCommand(params);
// try {	
//     const executeResponse = await client.send(command);
//     console.lof(executeResponse);
// }	// Get the results of the SQL statement	const getResultCommand = new GetStatementResultCommand({	Id: executeResponse.Id,	});	const resultResponse = await client.send(getResultCommand);	// Print the results	console.log(resultResponse.Records);} catch (error) {	const { requestId, cfId, extendedRequestId } = error.$$metadata;
// catch{
//     console.log('Error: ', error);
// }
// console.log({ requestId, cfId, extendedRequestId });


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
        timestamp: new Date().toISOString(),
    }
    if (lightRecords.length < 500) {
        lightRecords.push(lightRecord);
    }
    else {
        const insertStatement = createInsertStatement(lightRecords);
        const values = lightRecords.flatMap(record => [record.value, record.timestamp]);
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
        timestamp: new Date().toISOString(),
    }
    if (soundRecords.length < 500) {
        soundRecords.push(soundRecord);
    }
    else {
        const insertStatement = createInsertStatement(soundRecords);
        const values = soundRecords.flatMap(record => [record.value, record.timestamp]);
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


function createInsertStatement(lightRecords) {
    const valuePlaceholders = lightRecords.map(() => '($1, $2)');
    const joinedPlaceholders = valuePlaceholders.join(', ');

    console.log(joinedPlaceholders);
  
    return `
      INSERT INTO light_data (value, timestamp)
      VALUES ${joinedPlaceholders}
    `;
  }
  