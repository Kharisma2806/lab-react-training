import React, { useState } from 'react';

function ClickablePicture({ img, imgClicked }) {
  // state to track the current image
  const [currentImg, setCurrentImg] = useState(img);

  // function to handle the click event and toggle the image
  const handleClick = () => {
    setCurrentImg((prevImg) => (prevImg === img ? imgClicked : img));
  };

  // render the component with the current image
  return (
    <img src={currentImg} alt="maxence" onClick={handleClick} style={{ height: '300px', width: '300px' }}/>
  );
}

export default ClickablePicture;
