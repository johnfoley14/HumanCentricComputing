import axios from 'axios';
import { publicIp, port } from '../config';

const backendUrl = `http://${publicIp}:${port}`; // Replace with your actual backend URL

export const getLightReading = async () => {
  try {
    const response = await axios.get(`${backendUrl}/light_reading`);
    console.log(`Light reading: ${response.data}`);
    console.log(`Lght reading: ${response.data.data}`);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching light reading:', error);
    throw error; // Rethrow the error to handle it in the calling code if needed
  }
};

export const getSoundReading = async () => {
    try {
        const response = await axios.get(`${backendUrl}/sound_reading`);
        console.log(`Sound reading: ${response.data}`);
        console.log(`Sound reading: ${response.data.data}`);
        return response.data.data;
    } catch (error) {
        console.error('Error fetching sound reading:', error);
        throw error; // Rethrow the error to handle it in the calling code if needed
    }
    }