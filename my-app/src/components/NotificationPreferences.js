import React, { useState } from 'react';
import { updateNotificationPreferences } from '../services/api';

function NotificationPreferences() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notificationMethod, setNotificationMethod] = useState('email');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateNotificationPreferences(1, { // Assuming user ID 1 for this example
        email,
        phone,
        notificationMethod
      });
      alert('Notification preferences updated successfully!');
    } catch (error) {
      console.error('Error updating notification preferences:', error);
      alert('Failed to update notification preferences.');
    }
  };

  return (
    <div className="notification-preferences">
      <h2>Notification Preferences</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="tel"
          placeholder="Phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <select
          value={notificationMethod}
          onChange={(e) => setNotificationMethod(e.target.value)}
        >
          <option value="email">Email</option>
          <option value="sms">SMS</option>
          <option value="push">Push Notification</option>
        </select>
        <button type="submit">Save Preferences</button>
      </form>
    </div>
  );
}

export default NotificationPreferences;