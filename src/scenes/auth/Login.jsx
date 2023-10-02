import React, { useState } from 'react';
import {
  Button,
  Container,
  CssBaseline,
  TextField,
  Typography,
} from '@mui/material';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (prop) => (event) => {
    setFormData({ ...formData, [prop]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your login logic here
    console.log('Form data submitted:', formData);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div>
        <Typography component="h1" variant="h5">
          Log In
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            type="email"
            value={formData.email}
            onChange={handleChange('email')}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="password"
            label="Password"
            name="password"
            autoComplete="current-password"
            type="password"
            value={formData.password}
            onChange={handleChange('password')}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            onClick={handleSubmit}
          >
            Log In
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default LoginPage;
