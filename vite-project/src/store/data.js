import axios from 'axios';
import { publicIp, port } from '../config';

const backendUrl = `http://${publicIp}:${port}`; // Replace with your actual backend URL

export const getLightReading = async () => {
  try {
    const response = await axios.get(`${backendUrl}/light_reading`);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching current light reading:', error);
    throw error; // Rethrow the error to handle it in the calling code if needed
  }
};

export const getSoundReading = async () => {
    try {
        const response = await axios.get(`${backendUrl}/sound_reading`);
        return response.data.data;
    } catch (error) {
        console.error('Error fetching current sound reading:', error);
        throw error; // Rethrow the error to handle it in the calling code if needed
    }
    }

export const getBlindState = async () => {
    try {
        const response = await axios.get(`${backendUrl}/blind_state`);
        const responseString = JSON.stringify(response.data.data);
        const parts = responseString.split(' ');

        let blindStateValue = null;
        for (let i = 0; i < parts.length; i++) {
            if (parts[i] === 'blind' && parts[i + 1] === 'state:') {
                blindStateValue = parseInt(parts[i + 2]); 
                break;
            }
        }
        return blindStateValue;
    } catch (error) {
        console.error('Error fetching blind state:', error);
        throw error; 
    }
}

export const getManualMode = async () => {
    try {
        const response = await axios.get(`${backendUrl}/blind_state`);
        const responseString = JSON.stringify(response.data.data);

        const parts = responseString.split(' ');

        let manualModeValue = null;

        for (let i = 0; i < parts.length; i++) {
            if (parts[i] === 'manual' && parts[i + 1] === 'mode:') {
                manualModeValue = parseInt(parts[i + 2]); 
                break;
            }
        }
        console.log("Manual Mode Value:", manualModeValue);
        return manualModeValue;
        
    } catch (error) {
        console.error('Error fetching manual mode:', error);
        throw error; // Rethrow the error to handle it in the calling code if needed
    }
}

export const getLightRecords = async () => {
    try {
        const response = await axios.get(`${backendUrl}/light_records`);
        return response.data.data;
    } catch (error) {
        console.error('Error fetching light records:', error);
        throw error; // Rethrow the error to handle it in the calling code if needed
    }
}

export const getSoundRecords = async () => {
  try {
      const response = await axios.get(`${backendUrl}/sound_records`);
      return response.data.data;
  } catch (error) {
      console.error('Error fetching sound records:', error);
      throw error; // Rethrow the error to handle it in the calling code if needed
  }
}

