import React, { useEffect, useState } from "react";

const RideHistory = () => {
  const [rides, setRides] = useState([]);

  useEffect(() => {
    const fetchRides = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/rides");
        const data = await res.json();
        setRides(data);
      } catch (err) {
        console.log("Error:", err);
      }
    };

    fetchRides();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Ride History</h2>

      {rides.length === 0 ? (
        <p>No rides found</p>
      ) : (
        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>Pickup</th>
              <th>Drop</th>
              <th>Distance</th>
              <th>Fare</th>
            </tr>
          </thead>
          <tbody>
            {rides.map((ride) => (
              <tr key={ride._id}>
                <td>{ride.pickup}</td>
                <td>{ride.drop}</td>
                <td>{ride.distance} km</td>
                <td>₹{ride.fare}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default RideHistory;