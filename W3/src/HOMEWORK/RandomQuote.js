// RandomQuote.js
import React, { useState, useEffect } from 'react';

const RandomQuote = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    // Fetch a random quote from an API or use a predefined list
    const fetchRandomQuote = async () => {
      // Example using a predefined list of quotes
      const quotes = [
        "The only way to do great work is to love what you do.",
        "Believe you can and you're halfway there.",
        // Add more quotes as needed
      ];

      // Get a random quote
      const randomIndex = Math.floor(Math.random() * quotes.length);
      const randomQuote = quotes[randomIndex];

      setQuote(randomQuote);
    };

    fetchRandomQuote();
  }, []);

  return (
    <div>
      <p>Random Quote:</p>
      <blockquote>{quote}</blockquote>
    </div>
  );
};

export default RandomQuote;
