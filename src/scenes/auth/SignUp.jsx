import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Button,
  Container,
  CssBaseline,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  Input,
  IconButton,
  InputAdornment,
  Grid,
  Box,
  useTheme,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { tokens } from "../../theme";
import Logo from "../../assets/landinafrica.jpg"

const SignUpPage = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setFormData({ ...formData, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setFormData({ ...formData, showPassword: !formData.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //signup logic
    console.log("Form data submitted:", formData);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          borderRadius: "10px",
          backgroundColor: colors.primary[400],
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
          padding: "30px",
        }}
      >
        <img
          src={Logo}
          alt="Logo"
          style={{ marginBottom: "10px", width: "50px", height: "50px", borderRadius: "25px",
        }}
        />
        <Typography component="h1" variant="h3" gutterBottom>
          Sign Up
        </Typography>
        <Typography variant="body2" color="textSecondary" paragraph>
          Signup to Property CRM to manage your Business.
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="firstName"
            label="First Name"
            name="firstName"
            autoComplete="fname"
            autoFocus
            value={formData.firstName}
            onChange={handleChange("firstName")}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="lastName"
            label="Last Name"
            name="lastName"
            autoComplete="lname"
            value={formData.lastName}
            onChange={handleChange("lastName")}
          />
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
            onChange={handleChange("email")}
          />
          <FormControl fullWidth margin="normal" required>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              id="password"
              type={formData.showPassword ? "text" : "password"}
              value={formData.password}
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {formData.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            onClick={handleSubmit}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="space-between">
            <Button
              component={RouterLink}
              to="/forgot-password"
              color="secondary"
            >
              Forgot Password?
            </Button>
            <Button component={RouterLink} to="/" color="secondary">
              Login
            </Button>
          </Grid>
        </form>
      </Box>
    </Container>
  );
};

export default SignUpPage;
