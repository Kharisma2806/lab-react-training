import React from 'react';

const NumbersTable = ({ limit }) => {
  const numbers = [];
  for (let i = 1; i <= limit; i++) {
    const numberBox = (
      <div key={i} className={`number-box ${i % 2 === 0 ? 'red' : ''}`}>
        {i}
      </div>
    );
    numbers.push(numberBox);
  }

  return <div className="numbers-table">{numbers}</div>;
};

export default NumbersTable;
