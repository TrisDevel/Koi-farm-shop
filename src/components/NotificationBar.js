import React, { useState, useEffect } from 'react';
import '../components/styles/NotificationBar.css'; // Create a CSS file for styling

const NotificationBar = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('token');
    if (isLoggedIn) {
      setVisible(false);
    }
  }, []);

  const handleDismiss = () => {
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="notification-bar">
      <p>Konichiwa - We recommend you login to use all the features of our website.</p>
      <button className='notification-button-login' onClick={() => window.location.href = '/login'}>Login or Create Account</button><br/>
      <button className='notification-button-dismiss' onClick={handleDismiss}>Dismiss</button>
    </div>
  );
};

export default NotificationBar;