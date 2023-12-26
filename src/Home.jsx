import Button from '@mui/material/Button';
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <br></br><br></br><br></br><br></br><br></br><br></br>
      <center><h1>Welcome to the Home Page!</h1></center>
      <center><p>This is the home page content.</p></center>
      <Button variant="contained" color="primary"><Link to="/about">Go to About Page</Link></Button>
    </div>
  );
};

export default Home;
