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
        console.log(`Blind state: ${response.data}`);
        return response.data.data;
    } catch (error) {
        console.error('Error fetching blind state:', error);
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

