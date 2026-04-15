import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './Componets/Home';
import Layout from './Componets/Layout';
import CabBookingForm from './Componets/CabBookingForm';
import Login from './Componets/auth/Login';
import Register from './Componets/auth/Register';
import RideHistory from './Componets/RideHistory';
import PaymentForm from './context/PaymentForm';
import Blog from './Componets/Blog';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          
          <Route path="blog" element={<Blog />} />
          <Route path="cab-booking" element={<CabBookingForm />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="RideHistory" element={<RideHistory />} />
          <Route path="payment" element={<PaymentForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}