import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FlightStatusList from './components/FlightStatusList';
import NotificationPreferences from './components/NotificationPreferences';

function App() {
  const [flights, setFlights] = useState([]);
  const API_URL = 'http://127.0.0.1:5000/api';
  useEffect(() => {
    fetchFlights();
  }, []);

  const fetchFlights = async () => {
    try {
      const response = await axios.get(`${API_URL}/flights`);
      setFlights(response.data);
    } catch (error) {
      console.error('Error fetching flights:', error);
    }
  };

  return (
    <div className="App">
      <h1>Flight Status Updates</h1>
      <FlightStatusList flights={flights} />
      <NotificationPreferences />
    </div>
  );
}

export default App;