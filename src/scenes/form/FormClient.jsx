// FormClients.jsx

import React, { useState } from 'react';


const FormClients = () => {

  // State to hold the form data
  const [formData, setFormData] = useState({
    id: 1,
    clientName: '',
    phoneNumber: '',
    emailAddress: '',
    mailingAddress: '',
  });

  // Handle form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();


    // Assuming you have an API to post data to the server/database
    // You should replace this with your actual API call
    // Example API call using fetch:
    /*
    fetch('your-api-endpoint', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(data => {
        // Handle success, if needed
        console.log('Data posted successfully:', data);
      })
      .catch(error => {
        // Handle error, if needed
        console.error('Error posting data:', error);
      });
    */

    // Clear form data after submission
    setFormData({
      id: 1,
      clientName: '',
      phoneNumber: '',
      emailAddress: '',
      mailingAddress: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Client Name:
        <input
          type="text"
          name="clientName"
          value={formData.clientName}
          onChange={handleInputChange}
        />
      </label>
      <br />

      <label>
        Phone Number:
        <input
          type="text"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleInputChange}
        />
      </label>
      <br />

      <label>
        Email Address:
        <input
          type="text"
          name="emailAddress"
          value={formData.emailAddress}
          onChange={handleInputChange}
        />
      </label>
      <br />

      <label>
        Mailing Address:
        <input
          type="text"
          name="mailingAddress"
          value={formData.mailingAddress}
          onChange={handleInputChange}
        />
      </label>
      <br />

      <button type="submit">Submit</button>
    </form>
  );
};

export default FormClients;
