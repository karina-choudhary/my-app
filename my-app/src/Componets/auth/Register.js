import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (loading) return;

    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email: email.trim().toLowerCase(), // ✅ only this needed
          phone,
          password
        }),
      });

      const data = await response.json();
      console.log('Response:', data);

    } catch (error) {
      console.error('Error:', error);
    }

    setLoading(false);
  };

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow-sm" style={{ maxWidth: '400px', margin: 'auto' }}>
        <h3 className="text-center mb-4">Register</h3>

        <Form>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full Name"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone Number"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
              required
            />
          </Form.Group>

          <Button
            type="button"
            variant="primary"
            className="w-100"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "Registering..." : "Register"}
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Register;