import React, { useState } from 'react';

function LikeButton({ likes, setLikes }) {
  const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
  const [backgroundColorIndex, setBackgroundColorIndex] = useState(0);

  const incrementLikes = () => {
    setLikes((prevLikes) => prevLikes + 1);
    setBackgroundColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
  };

  const buttonStyle = {
    backgroundColor: colors[backgroundColorIndex],
    padding: '10px',
    borderRadius: '5px',
    color: 'white',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <div>
      <button style={buttonStyle} onClick={incrementLikes}>
        {likes} Likes
      </button>
    </div>
  );
}

export default LikeButton;
