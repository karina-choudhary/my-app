// PaymentForm.js

import React from 'react';
import { usePayment } from './PaymentContext';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const PaymentForm = () => {
  const { formData, updateFormData, submitPayment } = usePayment();

  const onChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // Validate form fields before submitting
    if (formData.pickUpPoint && formData.dropOffPoint && formData.cardNumber && formData.name) {
      submitPayment();
    } else {
      alert('All fields are required');
    }
  };

  return (
    <form align="center" onSubmit={onSubmit}>
      <h1>Enter below details</h1>
      <div className="form-group">
        <TextField
          value={formData.pickUpPoint}
          onChange={onChange}
          name="pickUpPoint"
          placeholder="Pick Up Address"
          variant="outlined"
        />
      </div>
      <div className="form-group">
        <TextField
          value={formData.dropOffPoint}
          onChange={onChange}
          name="dropOffPoint"
          placeholder="Drop Off Address"
          variant="outlined"
        />
      </div>
      <h1>Enter Payment Details</h1>
      <div className="form-group">
        <TextField
          value={formData.cardNumber}
          onChange={onChange}
          name="cardNumber"
          placeholder="Card Number"
          variant="outlined"
        />
      </div>
      <div className="form-group">
        <TextField
          value={formData.name}
          onChange={onChange}
          name="name"
          placeholder="Name on Card"
          variant="outlined"
        />
      </div>
      <div className="form-group">
        <Button
          type="submit"
          variant="contained"
          color="primary"
        >
          Book
        </Button>
      </div>
    </form>
  );
};

export default PaymentForm;

