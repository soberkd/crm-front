import React from "react";

const BookingDetail = ({ booking }) => {
  console.log("Booking Data:", booking);

  if (!booking) {
    return <div>Booking not found</div>;
  }

  console.log(booking.buyerName)
  // You can use the booking data to render the details
  return (
    <div>
      <h2>Booking Details</h2>
      <p>Booking ID: {booking[0].id}</p>
      <p>Property ID: {booking[0].propertyID}</p>
      {/* Add more booking details here */}
    </div>
  );
};

export default BookingDetail;
