import Popup from 'react-popup';
// import 'react-popup/style.css';
import "../App.css";

export const items = [
  {
    name: "Livewall AI Project",
    //Filter functie categorien 
    categories: ["HTML/CSS", "JavaScript"],
    // Afbeeldingen in grid
    image: "/images/livewallVoorkant.png",
    // Projectinformatie 
    projectInfo: "We maken een verhaaltjes generator voor kinderen voor Livewall. De verhaaltjes en de illustraties zijn AI gegenereerd.", 
    // Afbeelding in Popup
    bonusImage: ["images/LiveWallBoek.png"], 
    onClick: () => {
      Popup.alert('Livewall AI Project');
    },
  },
    {
      name: "Rockacademie branding",
      categories: ["Design"],
      image: "/images/Oumy_Logo_klein.png",
      projectInfo: "Ik heb de branding van Oumy gedaan, een student aan de Rockacademie in Tilburg. Hiervoor heb ik een stylescape gemaakt en een website ontworpen met Figma. Daarnaast heb ik user tests gedaan, veel onderzoek gedaan naar het populair maken van jouw muziek via Spotify en welke social media kanalen het meest gebruikt worden.", 
      bonusImage: ["images/stylescape_oumy.png", "images/OumyWebsite.png"],
      onClick: () => {
        Popup.alert('Rockacademie branding');
      },
    },
    {
      name: "Javascript projecten",
      categories: ["HTML/CSS", "JavaScript"], 
      image: "/images/mario.png",
      projectInfo: "Ik heb twee Javascript projecten gemaakt. Het eerste project was om de intro van een serie na te maken met alleen HTML, CSS en JavaScript. Voor het tweede project was de challenge om een object rond te laten vliegen met alleen de pijltjes toetsen. Ik heb hier een game van gemaakt.",
      bonusImage: ["images/introVideo.mp4", "images/FlyingGameVideo.mp4", "images/mario_game.mp4"],
      links: [
        "https://i512672.hera.fhict.nl/challenge1/",
        "https://i512672.hera.fhict.nl/challenge2/",
        "https://i512672.hera.fhict.nl/challenge3/",
      ],
      onClick: () => {
        Popup.alert('Javascript projecten');
      },
    },
    {
      name: "Portfolio semester 2",
      categories: ["HTML/CSS", "Design"],
      image: "images/leerdoelen.png", 
      projectInfo: "Voor semester 2 heb ik al mijn werk in een portfolio gezet, om zo mijn leeruitkomsten te bewijzen.",
      bonusImage: ["images/development_leerdoel.png", "images/designS2.png", "images/reseachS2.png"],
      onClick: () => {
        Popup.alert('Portfolio semester 2');
      },
    },
  {
    name: "Portfolio meubelbouwer",
    categories: ["HTML/CSS", "Design"],
    image: "images//HJ-logo-naam_achtergrond.png",
    projectInfo: "Ik heb een portfolio gemaakt voor een meubelmaker. Hiervoor heb ik een introductie-video gemaakt, een stylescape en een website gemaakt met een Paralax design. Voor dit project heb ik ook een 'aftermovie' gemaakt.",
    bonusImage: ["images/SprintX_edit.mp4"],
    onClick: () => {
      Popup.alert('Portfolio meubelbouwer');
    },
  },
  {
    name: "Weldas",
    categories: ["HTML/CSS", "JavaScript", "Design"],
    image: "images/weldas-logo-klein-wit.png",
    projectInfo: "Stuur een berichtje via mail of LinkedIn voor meer informatie.", 
    bonusImage: ["images/WvanWeldasOKE_small.gif"],
    onClick: () => {
      Popup.alert('Weldas');
    },
  }
  ];
  