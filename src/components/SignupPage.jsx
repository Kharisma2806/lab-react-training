import React, { useState } from 'react';

function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nationality, setNationality] = useState('en');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleNationalityChange = (e) => {
    setNationality(e.target.value);
  };

  const validateEmail = (email) => {
    return /^\S+@\S+\.\S+$/.test(email);
  };

  const checkPasswordStrength = (password) => {
    return password.length >= 8;
  };

  const getGreetingText = (nationality) => {
    switch (nationality) {
      case 'en':
        return 'Hello';
      case 'de':
        return 'Hallo';
      case 'fr':
        return 'Bonjour';
      default:
        return '';
    }
  };

  const isEmailValid = validateEmail(email);
  const isPasswordStrong = checkPasswordStrength(password);
  const greetingText = getGreetingText(nationality);

  return (
    <div>
      <label>Email:</label>
      <input
        type="email"
        value={email}
        onChange={handleEmailChange}
        style={{ borderColor: isEmailValid ? 'green' : 'red' }}
      />

      <label>Password:</label>
      <input
        type="password"
        value={password}
        onChange={handlePasswordChange}
        style={{ borderColor: isPasswordStrong ? 'green' : 'red' }}
      />

      <label>Nationality:</label>
      <select value={nationality} onChange={handleNationalityChange}>
        <option value="en">English</option>
        <option value="de">German</option>
        <option value="fr">French</option>
      </select>

      <p>{greetingText}</p>

      <p>Your email is {email}</p>
    </div>
  );
}

export default SignupPage;
