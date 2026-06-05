import { useState, useEffect } from "react";

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';
console.log('API_URL is:', API_URL);

export default function Body() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch(`${API_URL}/`)
      .then((res) => res.text())
      .then((data) => setMessage(data));
  }, []);

  return <div>{message}</div>;
}