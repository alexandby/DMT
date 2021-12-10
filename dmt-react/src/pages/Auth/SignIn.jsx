//Not complete!
import React from 'react';
import { Link } from 'react-router-dom';
//import Button from '@mui/material/Button';
import {
  Container,
  Box,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Paper,
} from '@mui/material';

const SignIn = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };
  return (
    <Container component="main" maxWidth="md">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          color: 'white',
        }}
      >
        <Paper
          sx={{ background: 'none', boxShadow: 'none', display: 'flex', alignItems: 'center' }}
        >
          <img src="/img/death.png" alt="deathlogo"></img>
          <Typography
            margin="normal"
            sx={{
              ml: 1,
              fontFamily: 'Bebas Neue',
              fontSize: 30,
              background: 'linear-gradient(to bottom, #ff0000 33%, #fffb00 66%, #8aa9d6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Who are you?
          </Typography>
        </Paper>
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
            color="warning"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="password"
            label="Password"
            name="password"
            autoComplete="current-password"
            color="warning"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="warning" />}
            label="Remember me"
            sx={{ color: 'orange' }}
          />
          <Link to="/games">
            <Button
              color="warning"
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign in
            </Button>
          </Link>
        </Box>
      </Box>
    </Container>
  );
};

export default SignIn;
