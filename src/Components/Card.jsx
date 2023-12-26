import React from 'react';

const Card = ({ data }) => {
  return (
    <div className="card">
      {/* Your card content goes here */}
      <h2>{data.title}</h2>
      <p>{data.description}</p>
    </div>
  );
};

export default Card;