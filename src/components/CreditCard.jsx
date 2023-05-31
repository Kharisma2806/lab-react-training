function CreditCard(props) {
  const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = props;

  // Get the last 4 digits of the credit card number
  const lastFourDigits = number.slice(-4);

  // Define the inline style object with the background and text color
  const style = {
    backgroundColor: bgColor,
    color: color,
  };

  return (
    <div className="credit-card" style={style}>
      <div className="credit-card-type">{type}</div>
      <div className="credit-card-number">**** **** **** {lastFourDigits}</div>
      <div className="credit-card-info">
      <div className="credit-card-expiration">
        Expires {expirationMonth.toString().padStart(2, '0')}/{expirationYear.toString().slice(-2)}
      </div>
      <div className="credit-card-bank">{bank}</div>
      </div>
      <div className="credit-card-owner">{owner}</div>
    </div>
  );
}

export default CreditCard;
