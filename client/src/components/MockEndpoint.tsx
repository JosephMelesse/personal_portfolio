import { useState, useEffect } from "react";

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export default function Body() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch(`${API_URL}/`)
      .then((res) => res.text())
      .then((data) => setMessage(data));
  }, []);

  return <button className="m-4 bg-blue-500 text-white px-4 py-2 rounded">{message}</button>;
}