
import ReCAPTCHA from "react-google-recaptcha"; // Import reCAPTCHA
import Breadcrumb from "../components/breadcrumb";
import React, { useState } from 'react';
import { Container, Box, Typography, TextField, Button, Alert } from '@mui/material';
import '../assets/register.css';
import Breadcrumb from '../components/breadcrumb';
const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [recaptchaToken, setRecaptchaToken] = useState(null); // State for reCAPTCHA token
  const [errors, setErrors] = useState({}); // State for validation errors

  const validateForm = () => {
    const newErrors = {};
    if (!name) newErrors.name = "Name is required";
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
    }
    if (!phone) newErrors.phone = "Phone number is required";
    if (!username) newErrors.username = "Username is required";
    if (!password) newErrors.password = "Password is required";
    if (!recaptchaToken) newErrors.recaptcha = "Please complete the reCAPTCHA"; // Ensure recaptcha is validated
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };





  const handleSubmit = async (event) => {
    event.preventDefault();
    //  try {
    //   const response = await api.post('/customers/register', {
    //     email: email,
    //     password: password,
    //   });

    //     console.log(response.data); // In ra để kiểm tra phản hồi

    //     if (response.data.code === 200) {
    //         // Lưu token và username vào localStorage
    //         localStorage.setItem('token', response.data.data.token);
    //         localStorage.setItem('username', response.data.data.username); // Lưu username
    //         localStorage.setItem('userId', response.data.data.userId); // Lưu username
    //         window.location.href = '/'; // Chuyển hướng
    //     } else {
    //         setError('Đăng nhập thất bại. Vui lòng thử lại.');
    //     }
    // } catch (error) {
    //     console.error(error); // In lỗi ra console để kiểm tra
    //     setError('Đăng nhập thất bại. Vui lòng thử lại.');
    // }
  };

  return (
    <>
    <Breadcrumb title="Register" />
    <Container component="main" maxWidth="xs">
      <Box sx={{ mt: 3 }}>
        <div>
          <h2 style={{ width: '1200px', height: '38px' }}>
            Welcome to KOI PARADISE!
          </h2>
          <p>
            Please login or register below for access to the highest quality koi
            fish available from Japan.
          </p>
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
            label="Name"
            name="name"
            value={name}
            className='name-input'
            onChange={(e) => setName(e.target.value)}
            error={!!errors.name}
            helperText={errors.name}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            value={email}
            className="email-input"
            onChange={(e) => setEmail(e.target.value)}
            error={!!errors.email}
            helperText={errors.email}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="phone"
            label="Phone Number"
            name="phone"
            value={phone}
            className='phone-input'
            onChange={(e) => setPhone(e.target.value)}
            error={!!errors.phone}
            helperText={errors.phone}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            value={username}
            className='username-input'

            onChange={(e) => setUsername(e.target.value)}
            error={!!errors.username}
            helperText={errors.username}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={password}
            className='password-input'
            onChange={(e) => setPassword(e.target.value)}
            error={!!errors.password}
            helperText={errors.password}
          />
          <ReCAPTCHA
            sitekey="6LcWOVUqAAAAAKTbKnxdEtQFd6QWMELXb0b9n6dE" // Replace with your site key
            onChange={(token) => setRecaptchaToken(token)} // Set token on change
          />
          {errors.recaptcha && (
            <Alert severity="error">{errors.recaptcha}</Alert>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
        </Box>
      </Box>
    </Container>
    </>
  );
};

export default Register;
