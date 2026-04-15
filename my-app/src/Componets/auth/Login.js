import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError('');
    setSuccess('');

    try {
      const res = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email.trim().toLowerCase(),
          password
        })
      });

      const data = await res.json();

      if (res.ok) {
        // ✅ save token
        localStorage.setItem('token', data.token);

        // ✅ show success message
        setSuccess('Login successful ✅');

        // ✅ redirect after 1 sec
        setTimeout(() => {
          navigate('/');
        }, 1000);

      } else {
        setError(data.error || 'Invalid email or password');
      }

    } catch (err) {
      setError('Network error');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto' }}>
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <br /><br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <br /><br />

        {/* ✅ Success message */}
        {success && (
          <div style={{ color: 'green' }}>
            {success}
          </div>
        )}

        {/* ❌ Error message */}
        {error && (
          <div style={{ color: 'red' }}>
            {error}
          </div>
        )}

        <br />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;