import React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <h1>About Page</h1>
      <Button variant="contained" color="primary"><Link to="/Home">Go to Home Page</Link></Button>
    </div>
  );
};

export default About;
