import React, { useState } from 'react';
import { TextField, Button, Container, Paper, Typography } from '@mui/material';

const Loogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

 const handleLogin = () => {

    console.log('Logging in with:', { username, password });
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={5} style={{ padding: '100px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        {/* Username input */}
        <TextField
          label="Username"
          variant="outlined"
          margin="normal"
          fullWidth
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          margin="normal"
          fullWidth
          value={password}
          onChange={(o) => setPassword(o.target.value)}
        />
        <Button variant="contained" color="warning" fullWidth onClick={handleLogin}>
          Login
        </Button>
      </Paper>
    </Container>
  );
};

export default Loogin;