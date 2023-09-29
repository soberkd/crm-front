import React, { useState } from "react";
import { Box, Button, TextField } from "@mui/material";

const FormBooking = () => {
  const [bookingData, setBookingData] = useState({
    id: 1,
    propertyID: "",
    buyerName: "",
    eventType: "",
    eventDateTime: "",
    eventLocation: "",
    bookingAmount: "",
    paymentStatus: "",
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      // Here, you can use the 'bookingData' to send data to your backend
      console.log("Booking Data to be sent:", bookingData);

      // Optionally, you can reset the form after submitting
      setBookingData({
        id: 1,
        propertyID: "",
        buyerName: "",
        eventType: "",
        eventDateTime: "",
        eventLocation: "",
        bookingAmount: "",
        paymentStatus: "",
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBookingData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <Box m="20px">
      <form onSubmit={handleFormSubmit}>
        <TextField
          fullWidth
          variant="filled"
          type="text"
          label="Property ID"
          name="propertyID"
          value={bookingData.propertyID}
          onChange={handleInputChange}
          required
        />
        <TextField
          fullWidth
          variant="filled"
          type="text"
          label="Buyer Name"
          name="buyerName"
          value={bookingData.buyerName}
          onChange={handleInputChange}
          required
        />
        <TextField
          fullWidth
          variant="filled"
          type="text"
          label="Event Type"
          name="eventType"
          value={bookingData.eventType}
          onChange={handleInputChange}
          required
        />
        <TextField
          fullWidth
          variant="filled"
          type="datetime-local"
          label="Event Date and Time"
          name="eventDateTime"
          value={bookingData.eventDateTime}
          onChange={handleInputChange}
          required
        />
        <TextField
          fullWidth
          variant="filled"
          type="text"
          label="Event Location"
          name="eventLocation"
          value={bookingData.eventLocation}
          onChange={handleInputChange}
          required
        />
        <TextField
          fullWidth
          variant="filled"
          type="text"
          label="Booking Amount"
          name="bookingAmount"
          value={bookingData.bookingAmount}
          onChange={handleInputChange}
          required
        />
        <TextField
          fullWidth
          variant="filled"
          type="text"
          label="Payment Status"
          name="paymentStatus"
          value={bookingData.paymentStatus}
          onChange={handleInputChange}
          required
        />

        <Box display="flex" justifyContent="end" mt="20px">
          <Button type="submit" color="secondary" variant="contained">
            Submit Booking
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default FormBooking;
