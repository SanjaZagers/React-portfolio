import React from "react";
import "../App.css";
import Popup from 'react-popup';
import ".//Items"

// Popup Configuration
<Popup
  className="mm-popup"
  btnClass="mm-popup__btn"
  closeBtn={true}
  closeHtml={null}
  defaultOk="Ok"
  defaultCancel="Cancel"
  wildClasses={false}
  escToClose={true}
/>
Popup.defaultProps.defaultOk = 'Sluiten';

// Links voor development opdrachten
const linkLabels = {
  'https://i512672.hera.fhict.nl/challenge1/': 'Raad de serie',
  'https://i512672.hera.fhict.nl/challenge2/': 'Speel zwerkbal!',
  'https://i512672.hera.fhict.nl/challenge3/': 'Speel Mario!'
};

const PopupContent = ({ item }) => {
  const handleClose = () => {
    Popup.close();
  };

  return (
    <div className="popup-scrollable">
      <button className="popup-close" onClick={handleClose}>
        <img src="/images/close_buttonP.png" alt="Close" />
      </button>
      <div className="popup-header">
        <h4 className="popup-title">{item.name}</h4>
      </div>
      <p className="popup-info">{item.projectInfo}</p>
      <div className="popup-images">
        {item.bonusImage && item.bonusImage.length > 0 ? (
          item.bonusImage.map((media, index) => (
            // Popup afbeelding of video
            <React.Fragment key={index}>
              {media.endsWith(".mp4") ? (
                <video key={index} className="popup-video" controls>
                  <source src={media} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img key={index} className="popup-image" src={media} alt={`Foto ${index + 1}`} />
              )}
            </React.Fragment>
          ))
        ) : (
          <img className="popup-image" src={item.image} alt={item.name} />
        )}
      </div>
      {/* Linkjes voor delopment opdrachten */}
      {item.links && item.links.length > 0 && (
        <div className="popup-links" >
      <p>Project linkjes:</p>
        <ul>
          {item.links.map((link, index) => (
            <a key={index} className="link-button" href={link} target="_blank">
              {linkLabels[link] || link}
            </a>
          ))}
        </ul>
        </div>
      )}
    </div>
  );
};

export default PopupContent;
