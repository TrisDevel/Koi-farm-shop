import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { TextField, Button, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/login.css";
import Breadcrumb from "../components/breadcrumb";
import api from "../config/axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (!email) {
      setError("Email is required");
      return;
    }
  
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return;
    }
  
    if (!password) {
      setError("Password is required");
      return;
    }
  
    try {
      const response = await api.post('/customers/login', {
        email: email,
        password: password,
      });
  
      if (response.data.code === 200) {
        localStorage.setItem('token', response.data.data.token);
        localStorage.setItem('name', response.data.data.name);
        localStorage.setItem('userId', response.data.data.userId);
        window.location.href = '/';
      }
    } catch (error) {
      if (error.response) {
        const status = error.response.status;
        const message = error.response.data.message || 'An error occurred';
        
        if (status === 404) {
          setError("Email not found");
        } else if (status === 401) {
          setError("Password is incorrect");
        } else {
          setError(message);
        }
      } else {
        setError('Login failed. Please try again.');
      }
    }
  };
  
  
  

  return (
    <>
      <Breadcrumb title="Login" />

      <Container component="main" maxWidth="xs">
        <Row>
          <Col>
            <Typography
              variant="body2"
              color="#212529"
              className="header-login"
            >
              <span className="title-login">
                Welcome to <strong>KOI PARADISE</strong>
              </span>
              <span className="login-text">
                <br /> Please login or register below for access to the highest
                quality koi fish available from Japan.
              </span>
            </Typography>
          </Col>
        </Row>
        <Box
          sx={{
            marginTop: 20,
            marginBottom: 23,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography style={{padding:'0'}} component="h1" variant="h5" className="text-center">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
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
                backgroundColor: "#efe9d9",
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
                backgroundColor: "#efe9d9",
              }}
            />

            {/* Hiển thị thông báo lỗi */}
            {error && (
              <Typography color="error" sx={{ mt: 2, mb: 2 }}>
                {error}
              </Typography>
            )}

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
        <Row>
          <Col>
            <Typography variant="body2" color="#212529" className="text-footer">
              <span style={{ color: "red" }}>Read FAQs </span> or call us with
              any questions at{" "}
              <span style={{ color: "red" }}>
                +84 KOI PARADISE SUPPORT (84-8567-1020)
              </span>
            </Typography>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
