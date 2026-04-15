import React, { useState } from 'react';
import './CabBookingForm.css';

const CabBookingForm = () => {
  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [fare, setFare] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Call the backend API to book the cab
    fetch('/book-cab', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ pickup, dropoff, date, time }),
    })
    .then((response) => response.json())
    .then((data) => setFare(data.fare));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={pickup} onChange={(event) => setPickup(event.target.value)} placeholder="Pickup Location" />
      <input type="text" value={dropoff} onChange={(event) => setDropoff(event.target.value)} placeholder="Dropoff Location" />
      <input type="date" value={date} onChange={(event) => setDate(event.target.value)} />
      <input type="time" value={time} onChange={(event) => setTime(event.target.value)} />
      <button type="submit">Book Cab</button>
      <p>Fare: {fare}</p>
    </form>
  );
};

export default CabBookingForm;
