// CardList.js
import React, { useState } from 'react';
import Card from './Card';

const CardList = ({ cardData }) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const nextCard = () => {
    setCurrentCardIndex((prevIndex) =>
      prevIndex === cardData.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="card-list">
      <Card data={cardData[currentCardIndex]} />
      <button onClick={nextCard}>Next</button>
    </div>
  );
};

export default CardList;
