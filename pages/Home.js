import React from "react";
import MultiFilters from "../components/MultiFilters";
import { items } from "../components/Items";
import CustomCursor from '../components/CustomCursor';
import PopupReact from "react-popup/dist/Popup.react";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import TextRotator from "../components/TextRotator";
import "../App.css";

class Home extends React.Component {
      render() {
        return (
            <main className="flex-container">
                <div className="scrollable-container">
                <div className="name-container">
                    <AnchorLink href="#intro"><h1>SANJA ZAGERS</h1></AnchorLink>
                    <div className="textContainer">
                        <TextRotator />
                    </div>
                    </div>

                        <div className="introduction" id="intro"> 
                        <h2 className="hover-effect">Voorstel rondje...</h2>
                        </div>
                    <div className="wie-informatie">
                        <p>Mijn naam is Sanja Zagers. Ik ben 28 jaar oud, geboren en getogen in Eindhoven maar ik wil graag alle hoeken van de aarde zien.
                            Ik ben geïnteresseerd in een veelzijdige <strong>afstudeerstage</strong> voor mijn Associates Degree waarbij ik mijn development-skills verder
                            kan ontwikkelen. Ik wil me graag gaan focussen op het leren van Vue en React.
                        
                            In mijn vrije tijd vind ik het leuk om te lezen, om lange wandeltochten door Spanje te maken
                            en heb ik waarschijnlijk 10.000 uur Sims gespeeld.
                        </p>
                    
                        <div className="wie-foto">
                            <img src="/images/sanja_gezicht.png" alt="Sanja's gezicht"></img>
                        </div>
                    </div>
              
                    <div className="projecten" id="porto">
                        <AnchorLink href='#porto'><h3 className="hover-effect">Projecten</h3></AnchorLink>
                    </div>
                    <h4 className="hover-effect">Filter opties:</h4>
                    <MultiFilters items={items} />
                    <PopupReact />
                    <CustomCursor />
                </div>
            </main>
        );
    }
}

export default Home;