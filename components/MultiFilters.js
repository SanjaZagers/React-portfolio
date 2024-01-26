import React, { useState } from "react";
import Popup from 'react-popup';
import PopupContent from '../components/PopupContent';
import "../App.css";

const MultiFilters = ({ items = [] }) => {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredItems, setFilteredItems] = useState(items);

  // HandleItem opent popup
  const handleItemClick = (item) => {
    const popupContent = <PopupContent item={item} />;
    Popup.alert(popupContent);
  };

  // Drie filters
  let filters = ["HTML/CSS", "JavaScript", "Design"];

  // Button click voor selecteren of annuleren filter
  const handleFilterButtonClick = (selectedCategory) => {
    let updatedFilters;

      // Check of de geselecteerd filter is al in the lijst 
    if (selectedFilters.includes(selectedCategory)) {
      // verwijder de filter als deze al is geselecteerd 
      updatedFilters = selectedFilters.filter((el) => el !== selectedCategory);
    } else {
           // voeg de filter als deze al is geselecteerd 
      updatedFilters = [...selectedFilters, selectedCategory];
    }

    // Updates filters
    setSelectedFilters(updatedFilters);

    if (updatedFilters.length > 0) {
      let tempItems = items.filter((item) =>
         // Als een filter is gekozen, filter items van de gekozen filter
        updatedFilters.some((filter) => item.categories.includes(filter))
      );
      setFilteredItems(tempItems);
    } else {
      //Als er geen filter is gekozen, laat alle items zien
      setFilteredItems([...items]);
    }
  };

  return (
    // Filter buttons
    <div className="wrapper">
      <div className="buttons-container">
        {filters.map((category, idx) => (
          <button
            onClick={() => handleFilterButtonClick(category)}
            className={`button ${selectedFilters?.includes(category) ? "active-filter" : ""}`}
            key={`filters-${idx}`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid projecten */}
      <div className="grid">
        {filteredItems.map((item, idx) => (
          <div key={`items-${idx}`} className={`grid-item ${selectedFilters.length > 0 ? "active" : ""}`} onClick={() => handleItemClick(item)}>
            <div className="grid-block">
              <a href={item.link}>
                <img src={item.image} alt={item.name} />
                <p>{item.name}</p>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultiFilters;
