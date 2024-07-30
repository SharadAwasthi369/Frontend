import React from 'react';

function FlightStatusList({ flights }) {
  return (
    <div className="flight-status-list">
      <h2>Current Flight Statuses</h2>
      <ul>
        {flights.map(flight => (
          <li key={flight.id}>
            Flight {flight.number}: {flight.status}
            {flight.delay && <span> (Delayed by {flight.delay} minutes)</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FlightStatusList;