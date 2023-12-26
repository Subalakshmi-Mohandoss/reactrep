// UserDetails.js

import React from 'react';
import { Card } from 'react-bootstrap';

const UserDetails = ({ user }) => {
  return (
    <Card className="mt-3">
      <Card.Body>
        <Card.Title>User Details</Card.Title>
        <Card.Text>
          <strong>First Name:</strong> {user.firstName} <br />
          <strong>Last Name:</strong> {user.lastName} <br />
          <strong>Email:</strong> {user.email}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default UserDetails;
