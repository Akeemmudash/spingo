import React, { useState, useEffect } from "react";

const NoInternet = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    // Add event listeners for online/offline detection
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Clean up event listeners on component unmount
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  if (!isOnline) {
    return (
      <div style={noInternetStyles}>
        <h1>No Internet Connection</h1>
        <p>Please check your connection and try again.</p>
      </div>
    );
  }

  return null;
};

const noInternetStyles = {
  position: "fixed",
  top: "70px",
  left: 0,
  width: "100%",
  backgroundColor: "#ff6b6b",
  color: "white",
  textAlign: "center",
  padding: "15px",
  zIndex: 1000,
};

export default NoInternet;
