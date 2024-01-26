import React, { useState, useEffect } from 'react';
import "../App.css";

// Functionele component voor aangepaste cursor
const CustomCursor = () => {
      // State hooks voor de huidige cursor en de vertraagde cursorpositie
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [delayedPosition, setDelayedPosition] = useState({ x: 0, y: 0 });
    
     // Effect hook om de cursorpositie bij te werken wanneer de muis beweegt
    useEffect(() => {
        const updateCursorPosition = (e) => {
            const { clientX, clientY } = e;
              // Directe positie bijwerken wanneer de muis beweegt
            setPosition({ x: clientX, y: clientY });

             // Positie met vertraging bijwerken na 100 milliseconden
            setTimeout(() => {
                setDelayedPosition({
                    x: clientX,
                    y: clientY,
                });
            }, 100);
        };

         // Event listener toevoegen voor het luisteren naar de muisbeweging
        document.addEventListener('mousemove', updateCursorPosition);

         // Cleanup-functie om de event listener te verwijderen bij het unmounten van de component
        return () => {
            document.removeEventListener('mousemove', updateCursorPosition);
        };
    }, []); // De lege array zorgt ervoor dat deze hook alleen wordt uitgevoerd bij het mounten en unmounten van de component

    return (
        <>
            <div className="custom-cursor" style={{ left: `${position.x}px`, top: `${position.y}px` }} />
            <div className="delayed-cursor" style={{ left: `${delayedPosition.x}px`, top: `${delayedPosition.y}px` }} />
        </>
    );
};

export default CustomCursor;
