import React, { useState, useEffect } from 'react';

// Component dat tekst roteert binnen een opgegeven tijdsinterval.
const TextRotator = () => {
   // Lijst met teksten die moeten worden weergegeven en geroteerd.
  const texts = ["STUDENT WEBDEVELOPMENT", "WANDELAAR, WERELDREIZIGER, FANATIEK SIMMER", "READY... SET... CODE!", " "];
    // Huidige index van de tekst die wordt weergegeven.
  const [currentIndex, setCurrentIndex] = useState(0);

  // Gebruik useEffect om de index te updaten op regelmatige intervallen.
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 5000); // Intervaltijd: elke 5000 milliseconden (5 seconden).

     // Clean-up: stop het interval wanneer het component wordt verwijderd.
    return () => clearInterval(intervalId);
  }, []); // Lege afhankelijkheidsarray zorgt voor éénmalige uitvoering bij het monteren.

  // Render het component.
  return (
    <div>
      {texts.map((text, index) => (
        <p
          key={index}
          className={index === currentIndex ? 'visible' : 'hidden'}
        >
          {text}
        </p>
      ))}
    </div>
  );
};

export default TextRotator;
