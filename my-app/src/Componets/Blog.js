import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine";

// Fix marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

// Routing Component
const Routing = ({ pickup, drop, onDistanceChange }) => {
  const map = useMap();

  useEffect(() => {
    if (!pickup || !drop) return;

    const routingControl = L.Routing.control({
      waypoints: [
        L.latLng(pickup.lat, pickup.lng),
        L.latLng(drop.lat, drop.lng),
      ],
      lineOptions: { styles: [{ color: "#007bff", weight: 5 }] },
      createMarker: () => null,
      addWaypoints: false,
      draggableWaypoints: false,
      show: false,
    }).addTo(map);

    routingControl.on("routesfound", (e) => {
      const route = e.routes[0];
      const distanceKm = route.summary.totalDistance / 1000;
      onDistanceChange(distanceKm);
    });

    return () => map.removeControl(routingControl);
  }, [pickup, drop, map, onDistanceChange]);

  return null;
};

const Blog = () => {
  const [pickup, setPickup] = useState(null);
  const [drop, setDrop] = useState(null);
  const [distance, setDistance] = useState(null);
  const [fare, setFare] = useState(null);
  const [cabType, setCabType] = useState("mini");

  const rates = { mini: 8, sedan: 10, suv: 14 };

  const places = {
    city: { lat: 24.5854, lng: 73.7125 },
    airport: { lat: 24.6177, lng: 73.8966 },
    railway: { lat: 24.5784, lng: 73.7021 },
  };

  // Fare calculate
  useEffect(() => {
    if (distance) {
      setFare((distance * rates[cabType]).toFixed(2));
    }
  }, [distance, cabType]);

  // Booking function
  const handleBooking = async () => {
    if (!pickup || !drop) {
      alert("Select Pickup & Drop 🚫");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/rides/book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          pickup: pickup.name,
          drop: drop.name,
          distance,
          fare,
          cabType,
        }),
      });

      if (res.ok) {
        alert("🚗 Booking Successful!");
      } else {
        alert("Booking Failed ❌");
      }
    } catch (err) {
      alert("Server Error ⚠️");
    }
  };

  return (
    <div className="container my-5">
      <div className="row g-4">

        {/* LEFT FORM */}
        <div className="col-md-4">
          <div className="card shadow p-3">
            <h4 className="text-center mb-3">🚗 Book Ride</h4>

            {/* Pickup */}
            <label>Pickup</label>
            <select
              className="form-select mb-2"
              onChange={(e) => {
                const val = e.target.value;
                setPickup(val ? { ...places[val], name: val } : null);
              }}
            >
              <option value="">Select Pickup</option>
              {Object.keys(places).map((key) => (
                <option key={key} value={key}>
                  {key}
                </option>
              ))}
            </select>

            {/* Drop */}
            <label>Drop</label>
            <select
              className="form-select mb-2"
              onChange={(e) => {
                const val = e.target.value;
                setDrop(val ? { ...places[val], name: val } : null);
              }}
            >
              <option value="">Select Drop</option>
              {Object.keys(places).map((key) => (
                <option key={key} value={key}>
                  {key}
                </option>
              ))}
            </select>

            {/* Cab */}
            <label>Cab Type</label>
            <select
              className="form-select mb-2"
              value={cabType}
              onChange={(e) => setCabType(e.target.value)}
            >
              <option value="mini">Mini</option>
              <option value="sedan">Sedan</option>
              <option value="suv">SUV</option>
            </select>

            {/* Info */}
            {distance && <p>Distance: {distance.toFixed(2)} km</p>}
            {fare && <p>Fare: ₹{fare}</p>}

            {/* Button */}
            <button className="btn btn-primary w-100" onClick={handleBooking}>
              Book Ride
            </button>
          </div>
        </div>

        {/* MAP */}
        <div className="col-md-8">
          <div className="card shadow" style={{ height: "500px" }}>
            <MapContainer
              center={[24.5854, 73.7125]}
              zoom={13}
              style={{ height: "100%" }}
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

              {pickup && (
                <Marker position={[pickup.lat, pickup.lng]}>
                  <Popup>Pickup</Popup>
                </Marker>
              )}

              {drop && (
                <Marker position={[drop.lat, drop.lng]}>
                  <Popup>Drop</Popup>
                </Marker>
              )}

              {pickup && drop && (
                <Routing
                  pickup={pickup}
                  drop={drop}
                  onDistanceChange={setDistance}
                />
              )}
            </MapContainer>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Blog;