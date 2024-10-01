import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import '../assets/register.css'; // Import your CSS file
import ReCAPTCHA from 'react-google-recaptcha'; // Import reCAPTCHA

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [recaptchaToken, setRecaptchaToken] = useState(null); // Add state for reCAPTCHA token

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!recaptchaToken) {
      alert('Please complete the reCAPTCHA');
      return;
    }
    console.log('Registration attempt with:', { name, email, phone, username, password, recaptchaToken });
    // Implement your registration logic here
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div>
          <h2 style={{width: '1200px', height: '38px'}}>
            Welcome to PARADISE Farm!
          </h2>
          <p>Please login or register below for access to the highest quality koi fish available from Japan.</p>
        </div>
        <Typography component="h1" variant="h4">
          Sign up
        </Typography>

        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
          <TextField
            margin="normal"
            required 
            fullWidth
            id="name"
            label="Fullname"
            name="name"
            autoComplete="name"
            autoFocus
            className='name-input'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            className='email-input'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="phone"
            label="Phone Number "
            name="phone"
            autoComplete="phone"
            className='phone-input'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username "
            name="username"
            autoComplete="username"
            className='username-input'
            autoFocus
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="new-password"
            className='password-input'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <ReCAPTCHA
            sitekey="YOUR_RECAPTCHA_SITE_KEY" // Replace with your site key
            onChange={(token) => setRecaptchaToken(token)} // Set token on change
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Link to="/login" variant="body2">
            {"Already have an account? Sign in"}
          </Link>
        </Box>
      </Box>
    </Container>
  );
};

export default Register;