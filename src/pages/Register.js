import React, { useState } from 'react';
import { Container, Box, Typography, TextField, Button, Alert } from '@mui/material';
import ReCAPTCHA from 'react-google-recaptcha'; // Import reCAPTCHA
import '../assets/register.css';
import Breadcrumb from '../components/breadcrumb';
import api from '../config/axios'; // Import Axios instance
import { useNavigate } from 'react-router-dom'; // Import useNavigate để điều hướng

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState(''); // Thông báo thành công
  const navigate = useNavigate(); // Sử dụng useNavigate để chuyển trang

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
    if (!recaptchaToken) newErrors.recaptcha = "Please complete the reCAPTCHA";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateForm()) return;
  
    try {
      const response = await api.post('customers/register', {
        name,
        email,
        phone_number: phone,
        username,
        password,
      });
  
      console.log("API Response:", response.data); // Kiểm tra phản hồi từ API
  
      if (response.data && response.data.token) {
        // Đăng ký thành công, lưu token và reload trang Home
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('username', response.data.username);
        setSuccessMessage("Registration successful! Redirecting to home...");
  
        setTimeout(() => {
          window.location.replace('/'); // Reload lại trang Home
        }, 2000);
      } else {
        throw new Error("Token không được trả về từ API");
      }
    } catch (error) {
      console.error("Lỗi đăng ký:", error);
      if (error.response) {
        const message = error.response.data.message || 'Registration failed. Please try again.';
        setErrors({ apiError: message });
      } else {
        setErrors({ apiError: 'Network error. Please try again later.' });
      }
    }
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
              Please login or register below for access to the highest quality koi fish available from Japan.
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
              className="name-input"
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
              className="phone-input"
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
              className="username-input"
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
              className="password-input"
              onChange={(e) => setPassword(e.target.value)}
              error={!!errors.password}
              helperText={errors.password}
            />
            <ReCAPTCHA
              sitekey="6LcWOVUqAAAAAKTbKnxdEtQFd6QWMELXb0b9n6dE"
              onChange={(token) => setRecaptchaToken(token)}
            />
            {errors.recaptcha && <Alert severity="error">{errors.recaptcha}</Alert>}
            {errors.apiError && <Alert severity="error">{errors.apiError}</Alert>}
            {successMessage && <Alert severity="success">{successMessage}</Alert>}
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
