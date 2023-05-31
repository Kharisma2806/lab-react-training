function Random(props) {
  const { min, max } = props;

  // Generate a random integer between min and max (inclusive)
  const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

  return <div>Random number: {randomNum}</div>;
}

export default Random;
