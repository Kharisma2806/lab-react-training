function Greetings(props) {
  const { lang, children } = props;

  // Define greeting texts for different languages
  const greetings = {
    de: 'Hallo',
    en: 'Hello',
    es: 'Hola',
    fr: 'Bonjour',
  };

  // Check if the specified language is supported
  if (!greetings.hasOwnProperty(lang)) {
    return <div>Unsupported language: {lang}</div>;
  }

  // Retrieve the greeting text for the specified language
  const greeting = greetings[lang];

  return <div>{greeting} {children}</div>;
}

export default Greetings;
