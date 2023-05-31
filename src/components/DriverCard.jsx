import React from 'react';

function DriverCard(props) {
  const { name, rating, img, car } = props;

  const roundedRating = Math.round(rating);
  const stars = ['☆', '☆', '☆', '☆', '☆'];

  for (let i = 0; i < roundedRating; i++) {
    stars[i] = '★';
  }

  return (
    <div className="driverCard">
      <img className="driverCardImg" src={img} alt="driverImg" />
      <div className="driverCardData">
        <h2>{name}</h2>
        <div className="stars">{stars.join('')}</div>
        <p>{car.model} - {car.licensePlate}</p>
      </div>
    </div>
  );
}

export default DriverCard;
