// SignUp.js

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Card, Form, Button } from 'react-bootstrap';

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // You can add logic here to handle form submission, e.g., send data to a server

    // Redirect to the UserDetails page
    history.push('/user-details');
  };

  return (
    <Card>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          {/* ... (unchanged form fields) */}

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default SignUp;
