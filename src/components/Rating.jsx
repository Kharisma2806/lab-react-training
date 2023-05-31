function Rating(props) {
  const { children } = props;

  // Round the number to the nearest integer
  const rating = Math.round(children);

  // Create an array of stars based on the rating value
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push('★');
    } else {
      stars.push('☆');
    }
  }

  return <div className="rating">{stars.join('')}</div>;
}

export default Rating;
