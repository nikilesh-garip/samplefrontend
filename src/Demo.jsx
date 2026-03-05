import React, { useState, useEffect } from 'react';

const API_BASE_URL = 'https://samplebackend-r05s.onrender.com';

function Home() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch(`${API_BASE_URL}/demo`)
      .then(response => response.text())
      .then(data => setMessage(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div>
      <h2>Home Page</h2>
      <p>Message from backend: {message}</p>
    </div>
  );
}

export default Home;
