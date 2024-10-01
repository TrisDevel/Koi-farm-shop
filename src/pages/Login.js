import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap'; 
import { TextField, Button, Typography, Box } from '@mui/material'; 
import { Link } from 'react-router-dom';
import axios from '../config/axios'; // Import axios instance
import 'bootstrap/dist/css/bootstrap.min.css'; 
import '../assets/login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // Thêm state để quản lý lỗi

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/login', { email, password });
      console.log(response.data);
      
      // Xử lý đăng nhập thành công
      if (response.data.token) {
        localStorage.setItem('token', JSON.stringify(response.data.token));
        // Chuyển hướng người dùng đến trang chủ hoặc trang khác
        window.location.href = '/home';
      } else {
        setError('Đăng nhập thất bại. Vui lòng thử lại.');
      }
    } catch (error) {
      setError('Đăng nhập thất bại. Vui lòng thử lại.');
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Row >
        <Col >
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
  );
};

export default Login;