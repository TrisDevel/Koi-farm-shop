import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Login attempt with:', { email, password });
    // Implement your login logic here
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
        <Typography component="h1" variant="h5">
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
            error={!email} // Thêm kiểm tra lỗi nếu email trống
            helperText={!email ? 'Email is required' : ''} // Hiển thị thông báo nếu email trống
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
            error={!password} // Thêm kiểm tra lỗi nếu mật khẩu trống
            helperText={!password ? 'Password is required' : ''} // Hiển thị thông báo nếu mật khẩu trống
          />
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
    </Container>
  );
};

export default Login;