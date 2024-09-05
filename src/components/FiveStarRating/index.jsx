import React, { useState } from 'react';
import './FiveStarRating.css';

const FiveStarRating = ({ rating = 0, onRate, className = '' }) => {
  const [hoveredRating, setHoveredRating] = useState(0);
  const [currentRating, setCurrentRating] = useState(rating);

  const handleMouseEnter = (index) => {
    setHoveredRating(index);
  };

  const handleMouseLeave = () => {
    setHoveredRating(0);
  };

  const handleClick = (index) => {
    setCurrentRating(index);
    if (onRate) {
      onRate(index);
    }
  };

  return (
    <div className={`star-rating ${className}`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          index={star}
          isFilled={currentRating >= star || hoveredRating >= star}
          onMouseEnter={() => handleMouseEnter(star)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(star)}
        />
      ))}
    </div>
  );
};

const Star = ({ index, isFilled, onMouseEnter, onMouseLeave, onClick }) => (
  <span
    className={`star ${isFilled ? 'filled' : ''}`}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    onClick={onClick}
  >
    ★
  </span>
);

export default FiveStarRating;
