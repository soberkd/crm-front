import React from "react";

const BookingDetail = ({ booking }) => {
  console.log("Booking Data:", booking);

  if (!booking) {
    return <div>Booking not found</div>;
  }

  // You can use the booking data to render the details
  return (
    <div>
      <h2>Booking Details</h2>
      <p>Booking ID: {booking.id}</p>
      <p>Property ID: {booking.propertyID}</p>
      {/* Add more booking details here */}
    </div>
  );
};

export default BookingDetail;
