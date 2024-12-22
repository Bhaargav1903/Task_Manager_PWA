// src/components/NotificationButton.js
import React from 'react';
import { getToken } from 'firebase/messaging';
import { messaging } from '../firebase';

const requestNotificationPermission = async () => {
  try {
    const token = await getToken(messaging, {
      vapidKey: 'BO1ILl_kHDJsBPRTXkVlQ_dSD9hTdgaun_1U1i8BmygPfcY_AKsB5An4TXy4Lqdkox5B_2aUBCNFuU48EXlNhas', // Replace with your Firebase VAPID key
    });

    if (token) {
      console.log('Notification permission granted. Token:', token);
      // Send this token to your backend to save it
    } else {
      console.log('No registration token available.');
    }
  } catch (err) {
    console.error('Error getting notification token:', err);
  }
};

const NotificationButton = () => {
  return (
    <button onClick={requestNotificationPermission}>
      Enable Notifications
    </button>
  );
};

export default NotificationButton;
