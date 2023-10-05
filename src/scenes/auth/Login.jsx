import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Button,
  Container,
  CssBaseline,
  TextField,
  Typography,
  Grid,
  useTheme,
  Box,
} from '@mui/material';
import { tokens } from '../../theme';
import Logo from "../../assets/landinafrica.jpg"


const LoginPage = ({ onLogin }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (prop) => (event) => {
    setFormData({ ...formData, [prop]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // login logic here
    const dummyToken = 'dummyToken';
    onLogin(dummyToken);
    console.log('Form data submitted:', formData);
  };
 
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          borderRadius: '10px', 
          backgroundColor: colors.primary[400], 
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', 
          padding: '30px',
        }}>
           <img
          src={Logo}
          alt="Logo"
          style={{ marginBottom: "10px", width: "50px", height: "50px", borderRadius: "25px",
        }}
        />
        <Typography component="h1" variant="h3" gutterBottom>
          Welcome Back!
        </Typography>
        <Typography variant="body2" color="textSecondary" paragraph>
          Log in to your account to continue.
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
            sx={{ mt: 3, mb: 2 }}
          >
            Log In
          </Button>
          <Grid container justifyContent="space-between">
            <Button
              component={RouterLink}
              to="/forgot-password"
              color="secondary"
            >
              Forgot Password?
            </Button>
            <Button
              component={RouterLink}
              to="/signup"
              color="secondary"
            >
              Sign Up
            </Button>
          </Grid>
        </form>
      </Box>
    </Container>
  );
};

export default LoginPage;
