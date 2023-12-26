// InfoCard.js
import React from 'react';
import Card from 'react-bootstrap/Card';

const InfoCard = ({ data }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{data.title}</Card.Title>
        <Card.Text>{data.description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default InfoCard;
