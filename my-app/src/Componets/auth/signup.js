import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './Signup.css';

function Signup() {
    const [signupInfo, setSignupInfo] = useState({
        email: '',
        password: ''
    });
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSignupInfo(prev => ({ ...prev, [name]: value }));
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        const { email, password } = signupInfo;

        if (!email || !password) {
            setMessage('Email and password are required');
            return;
        }

        try {
            const url = `http://localhost:3000/auth/signup`;
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(signupInfo)
            });

            if (!response.ok) {
                const errorResult = await response.json();
                setMessage(errorResult.message || 'Something went wrong');
                return;
            }

            const result = await response.json();
            console.log('API response:', result); // Log for debugging

            const { success, message: responseMessage } = result;

            if (success) {
                setMessage('Signup successful! Redirecting to login...');
                setTimeout(() => {
                    navigate('/login');
                }, 1000);
            } else {
                setMessage(responseMessage);
            }

        } catch (err) {
            console.error('Signup error:', err);
            setMessage('An error occurred. Please try again.');
        }
    };
    
    
      return (
        <div className="container signup-container">
          <h1 className="signup-title">Signup</h1>
          {message && <p className="error-message">{message}</p>}
          <form onSubmit={handleSignup} className="signup-form">
            <div className="form-group">
              <label htmlFor="email" className="label">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email..."
                value={signupInfo.email}
                onChange={handleChange}
                className="input-field"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password" className="label">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password..."
                value={signupInfo.password}
                onChange={handleChange}
                className="input-field"
              />
            </div>
            <button type="submit" className="signup-btn">Signup</button>
            <span className="login-link">
              Already have an account? <Link to="/login">Login</Link>
            </span>
          </form>
          <ToastContainer />
        </div>
      );
    };
    
    export default Signup;
    
    
    
