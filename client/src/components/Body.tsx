import { useState, useEffect } from "react";

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export default function Body() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch(`${API_URL}/`)
      .then((res) => res.text())
      .then((data) => setMessage(data));
  }, []);

  return <div className="text-3xl font-bold underline">{message}</div>;
}