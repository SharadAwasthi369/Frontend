import axios from 'axios';

const API_URL = 'http://127.0.0.1:5000/api';

export const getFlights = () => axios.get(`${API_URL}/flights`);

export const updateFlightStatus = (flightId, status, delay) => 
  axios.post(`${API_URL}/flight_status`, { flightId, status, delay });

export const updateNotificationPreferences = (userId, preferences) => 
  axios.post(`${API_URL}/notification_preferences`, { userId, ...preferences });