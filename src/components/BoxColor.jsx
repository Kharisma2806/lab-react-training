function BoxColor(props) {
  const { r, g, b } = props;

  // Create a CSS color string using the provided RGB values
  const color = `rgb(${r}, ${g}, ${b})`;

  // Convert the RGB values to hex format
  const hex = rgbToHex(r, g, b);

  // Define the inline style object with the background color
  const style = {
    backgroundColor: color,
    width: '200px',
    height: '100px',
  };

  return (
    <div>
      <div style={style}></div>
      <div>Hex: {hex}</div>
    </div>
  );
}

// Function to convert RGB values to hex format
function rgbToHex(r, g, b) {
  const hexR = r.toString(16).padStart(2, '0');
  const hexG = g.toString(16).padStart(2, '0');
  const hexB = b.toString(16).padStart(2, '0');
  return `#${hexR}${hexG}${hexB}`;
}

export default BoxColor;
