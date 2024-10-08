import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap'; 
import { TextField, Button, Typography, Box } from '@mui/material'; 
import { Link } from 'react-router-dom';
import axios from '../config/axios'; // Import axios instance
import 'bootstrap/dist/css/bootstrap.min.css'; 
import '../assets/login.css';
import Breadcrumb from "../components/breadcrumb";
import api from '../config/axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await api.post('/customers/login', {
        email: email,
        password: password,
      });

        console.log(response.data); // In ra để kiểm tra phản hồi

        if (response.data.code === 200) {
            // Lưu token và username vào localStorage
            localStorage.setItem('token', response.data.data.token);
            localStorage.setItem('username', response.data.data.username); // Lưu username
            localStorage.setItem('userId', response.data.data.userId); // Lưu username
            window.location.href = '/'; // Chuyển hướng
        } else {
            setError('Đăng nhập thất bại. Vui lòng thử lại.');
        }
    } catch (error) {
        console.error(error); // In lỗi ra console để kiểm tra
        setError('Đăng nhập thất bại. Vui lòng thử lại.');
    }
};


  return (
    <>
    <Breadcrumb title="Login" />

    <Container component="main" maxWidth="xs">
      <Row>
        <Col>
          <Typography variant="body2" color='#212529' className='header-login' >
            <span className='title-login'>Welcome to <strong>KOI PARADISE</strong></span>
            <span className='login-text'><br /> Please login or register below for access to the highest quality koi fish available from Japan.</span>
          </Typography>
        </Col>
      </Row>
      <Box
        sx={{
          marginTop: 20,
          marginBottom: 23,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >



        <Typography component="h1" variant="h5" className="text-center">
          Sign in
        </Typography>

        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{
              backgroundColor: '#efe9d9',
            }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{
              backgroundColor: '#efe9d9',
            }}
          />
          {error && <Typography color="error">{error}</Typography>} {/* Hiển thị lỗi nếu có */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Link to="/register" variant="body2">
            {"Don't have an account? Sign Up"}
          </Link>
        </Box>
      </Box>
      <Row >
        <Col>
          <Typography variant="body2" color='#212529' className="text-footer">
            <span style={{ color: 'red' }}>Read FAQs </span> or call us with any questions at <span style={{ color: 'red' }}>+84 KOI PARADISE SUPPORT (84-8567-1020)</span>
          </Typography>
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default Login;