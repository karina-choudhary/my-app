// PaymentContext.js
import React, { createContext, useContext, useState } from 'react';

// Create the PaymentContext
const PaymentContext = createContext();

// Custom hook to use the PaymentContext
export const usePayment = () => {
  return useContext(PaymentContext);
};

// PaymentContext Provider component
export const PaymentProvider = ({ children }) => {
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [paymentAmount, setPaymentAmount] = useState(0);
  const [paymentStatus, setPaymentStatus] = useState('');

  const processPayment = async (method, amount) => {
    // Simulate a payment processing
    try {
      // Call your payment API or perform necessary logic
      // For demonstration, just set a timeout to simulate async operation
      setPaymentStatus('Processing');
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate API call
      setPaymentMethod(method);
      setPaymentAmount(amount);
      setPaymentStatus('Success');
    } catch (error) {
      setPaymentStatus('Error');
      console.error('Error processing payment:', error);
    }
  };

  const resetPayment = () => {
    setPaymentMethod(null);
    setPaymentAmount(0);
    setPaymentStatus('');
  };

  // Context value to be provided
  const contextValue = {
    paymentMethod,
    paymentAmount,
    paymentStatus,
    processPayment,
    resetPayment
  };

  return (
    <PaymentContext.Provider value={contextValue}>
      {children}
    </PaymentContext.Provider>
  );
};
