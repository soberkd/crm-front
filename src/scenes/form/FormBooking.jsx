import React, { useState } from "react";
import { Box, Button, TextField, useMediaQuery } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import Header from "../../components/Header";

const FormBooking = () => {

  const isNonMobile = useMediaQuery("(min-width:600px)");

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

  const handleFormSubmit = async (values) => {
    try {
      // Here, you can use the 'bookingData' to send data to your backend
      console.log("Booking Data to be sent:", values);

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

  const bookingSchema = yup.object().shape({
    propertyID: yup.string().required("Required"),
    buyerName: yup.string().required("Required"),
    eventType: yup.string().required("Required"),
    eventDateTime: yup.string().required("Required"),
    eventLocation: yup.string().required("Required"),
    bookingAmount: yup.string().required("Required"),
    paymentStatus: yup.string().required("Required"),
  });

  return (
    <Box m="20px">
      <Header title="ADD NEW BOOKING" subtitle="Add New Booking" />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={bookingData}
        validationSchema={bookingSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
             <Box
              display="grid"
              gap="10px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
            <TextField
              variant="standard"
              type="text"
              label="Property ID"
              name="propertyID"
              value={values.propertyID}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.propertyID && Boolean(errors.propertyID)}
              helperText={touched.propertyID && errors.propertyID}
              required
              sx={{ gridColumn: "span 2" }}

            />
            <TextField
              fullWidth
              variant="standard"
              type="text"
              label="Buyer Name"
              name="buyerName"
              value={bookingData.buyerName}
              onChange={handleChange}
              required
              sx={{ gridColumn: "span 3" }}

            />
            <TextField
              fullWidth
              variant="standard"
              type="text"
              label="Event Type"
              name="eventType"
              value={bookingData.eventType}
              onChange={handleChange}
              required
              sx={{ gridColumn: "span 2" }}

            />
            <TextField
              fullWidth
              variant="standard"
              type="datetime-local"
              label=" "
              name="eventDateTime"
              value={bookingData.eventDateTime}
              onChange={handleChange}
              required
              sx={{ gridColumn: "span 2" }}

            />
            <TextField
              fullWidth
              variant="standard"
              type="text"
              label="Event Location"
              name="eventLocation"
              value={bookingData.eventLocation}
              onChange={handleChange}
              required
              sx={{ gridColumn: "span 2" }}

            />
            <TextField
              fullWidth
              variant="standard"
              type="text"
              label="Booking Amount"
              name="bookingAmount"
              value={bookingData.bookingAmount}
              onChange={handleChange}
              required
              sx={{ gridColumn: "span 2" }}

            />
            <TextField
              variant="standard"
              type="text"
              label="Payment Status"
              name="paymentStatus"
              value={bookingData.paymentStatus}
              onChange={handleChange}
              required
              sx={{ gridColumn: "span 2" }}

            />
                        </Box>

            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Submit Booking
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default FormBooking;