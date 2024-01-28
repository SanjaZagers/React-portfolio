# React to-html


<h1>Project Overview</h1> 

This React project is a personal portfolio website for Sanja Zagers. It showcases my introduction, skills, and projects in a visually appealing and interactive manner. The project uses React components, CSS styling, and additional libraries for enhanced features.

<h2>Project Structure</h2> 

-	**App.js**: the main entry point of your React application. 

-	**Home.js**: This file represents the main component for the home page of the portfolio.
-	**Header.js**: this represents the navigation header of a web application.
-	**Footer.js**: this represents the footer section of a web application

components/
1.	**MultiFilters.js**: A component for rendering and handling multiple filters.
2.	**Items.js**: A file containing data for items used in the portfolio.
3.	**CustomCursor.js**: A component providing a custom cursor effect.
4.	**PopupReact.js**: A component utilizing the react-popup library for displaying popups.
5.	**TextRotator.js**: A component for rotating text content.

<h2>Getting Started</h2>

<h3>Clone the repository:</h3> 

git clone https://github.com/your-username/your-react-portfolio.git 

<h3>Install dependencies:</h3>

cd react-html npm install 

<h3>Start the development server:</h3> 

Cd react-html 

npm start 

The application should now be running on http://localhost:3000.
Make sure to install all the required libraries before starting the application.

<h2>Features</h2> 

-	Introduction Section: Contains an introduction and name linked to smooth scrolling to other sections.

- About Section (wie-informatie): Displays personal information, a brief bio, and an image.
-	Projects Section (projecten): Includes a link for smooth scrolling and displays projects.
-	Filter Options: Allows users to filter projects based on certain criteria.
-	Popup: Utilizes the react-popup library for additional interactive popups.
-	Custom Cursor: Adds a custom cursor for a unique user experience.

<h2>Technologies Used</h2>

- React: The project is built using React for the frontend structure.

- CSS: Styling is done using CSS, with a separate App.css file.

<h2>React Libraries:</h2> 

- React: The core library for building the user interface.

- react-router-dom: A library for managing navigation in the React application.
- react-anchor-link-smooth-scroll: A library for smooth scroll animations when navigating to anchor elements.
-  react-popup:  A library for creating pop-ups and modals.

<h2>Contributors</h2> 

Sanja Zagers

<h2>License</h2>

This project is licensed under the MIT License.

Feel free to customize this readme according to your project's specific details and needs.

## Project status
Work in progress. 


<h1>App.js ReadMe</h1> 


 <h2>Overview</h2> 

 <details> 

The **App.js** file is the main entry point of your React application. It utilizes the React Router for navigation and organizes the structure of the application by combining the Header, Home, About, Contact, and Footer components.
Usage<summary>

The **App.js** component is typically the starting point of your React application. Import it into your index.js file or the file where you initialize your React application and render it.


import React from "react"; 
import ReactDOM from "react-dom"; 
import App from "./App";
 ReactDOM.render( <React.StrictMode> <App /> </React.StrictMode>, document.getElementById("root") ); 


<h2>Features</h2> 

-	React Router: Utilizes React Router for client-side navigation, allowing the rendering of different components based on the route.
-	Header, Home, About, Contact, Footer: Integrates the Header for navigation, Home, About, and Contact components as different pages, and Footer for the bottom section of the application.


<h2>Component Structure</h2> 

-	Router: Wraps the entire application with the Router component, enabling the use of routes for navigation.
-	Routes: Defines different routes for the application using the Routes component. Each route corresponds to a specific page.
-	Header, Home, Footer: These components are used to structure the main content and navigation of the application.

<h3>Example


````

import React from "react";

 import App from "./components/App";

 const Index = () => { return ( <div> 

 {/* Other components or content */} 

 <App /> </div> ); }; 

export default Index;
````

</summary>

</details>



<h1> Header.js ReadMe </h1>

<h2>Overview </h2> 

<details>

The **Header.js** file defines a React component, Header, which represents the navigation header of a web application. It includes a logo, navigation links, and utilizes the react-anchor-link-smooth-scroll library for smooth scrolling when navigating to specific sections on the page.

<h2>Usage</h2>

To use the Header component, import it into your desired React file and include it in your JSX.

````
import React from "react";

 import Header from "./components/Header"; 

const YourComponent = () => 

{ return ( <div>

 {/* Other components or content */} <Header /> </div> ); 

};
 export default YourComponent;

 ````

<h2>Features</h2> 

-	Logo: Displays a logo (nav-logo) at the left side of the header.

-	Navigation Links: Includes navigation links for "Home," "Voorstellen" (Introduction), and "Projecten" (Projects).
-	Smooth Scrolling: Utilizes the react-anchor-link-smooth-scroll library for smooth scrolling when navigating to specific sections.
Component Logic
-	AnchorLink Usage: The AnchorLink component is used for smooth scrolling navigation. It provides a seamless transition when clicking on navigation links.


<h3>Example</h3> 


````
import React from "react"; 
import Header from "./components/Header"; 
const App = () => 
{ return ( <div> <Header /> {/* Other components or content */} </div> );
 };
 export default App;
```` 

<summary>
</summary>

</details>



<h1> Footer.js ReadMe </h1>


<h2>Overview</h2> 

<details> 

The **Footer.js** file defines a React component, Footer, representing the footer section of a web application. This footer includes contact information, social links, and icons for LinkedIn, GitHub, and email.


<h2> Usage </h2> 

To use the Footer component, import it into your desired React file and include it in your JSX.

```` 
import React from "react"; 

import Footer from "./components /Footer"; 

const YourComponent = () => 
{ return ( <div> {/* Other components or content */} 

<Footer /> </div> ); 
}; 
export default YourComponent; 
````


<h2> Features </h2> 

- Contact Information: Displays a heading and links for contacting the user.
- Social Links: Provides icons and links for LinkedIn, GitHub, and email.
Component Logic
- Hover Effect: The heading "Contact informatie" has a hover effect for visual interaction.

<h3>Example </h3>


````

import React from "react"; 
import Footer from "../components/Footer"; 
const App = () => { 
    return ( <div> {/* Other components or content */} <Footer /> </div> );
 }; 
export default App;

````
</summary>

</details>



<h1> MultiFilters Component ReadMe</h1> 

<h2>Overview </h2> 

<details>Click to expand

The **MultiFilters** component is a reusable React component designed for filtering and displaying a collection of items based on predefined categories. It provides users with the ability to select multiple filters and dynamically updates the displayed items accordingly. The component utilizes state hooks to manage the selected filters and the filtered items.


<h2> Usage </h2> 

To use the MultiFilters component, import it into your desired React file and include it in your JSX. You can pass an array of items as a prop to be filtered and displayed by the component.

```` 
import React from "react";
import MultiFilters from "../components/MultiFilters"; 
import { items } from "../components/Items"; 
// Import your items data 
const YourComponent = () => { return ( <div> {/* Other components or content */} <MultiFilters items={items} /> </div> );
 }; 
export default YourComponent; 

```` 

<h2>Features </h2> 
Filter Buttons: Predefined filter buttons for categories such as "HTML/CSS," "JavaScript," and "Design."
Dynamic Filtering: Allows users to select multiple filters, dynamically updating the displayed items based on the selected categories.
Popup Integration: Clicking on an item triggers a popup with additional content, enhancing the user experience.
CSS Styling: The component includes CSS styles to provide a visually appealing and responsive layout.


<h2> Component Logic </h2> 

<h3>State Management: </h3> 

-	selectedFilters: Keeps track of the currently selected filters.
-	filteredItems: Stores the items that match the selected filters.
Filtering Logic:
-	The component uses the handleFilterButtonClick function to update the selected filters and filter the items accordingly.
Popup Display:
-	Clicking on an item triggers the handleItemClick function, displaying a popup with additional content related to the selected item.


<h3> Customization </h3> 
You can customize the component by modifying the filters array to include your desired filter categories. Additionally, you can adjust the styling by updating the CSS classes.


<h3>Example </h3>

````

import React from "react"; 
import MultiFilters from "../components/MultiFilters";
 import { items } from "../components/Items"; 
const PortfolioPage = () => 
{ return 
( <div> 
<h1>Portfolio</h1> 
<MultiFilters items={items} /> </div> );
 }; 
export default PortfolioPage; 

```` 

# Acknowledgments

Special thanks to xplodivity  for their invaluable contribution to this project. xplodivity provided crucial insights and guidance, which greatly enhanced the quality of the project. 

## External Resources

- YouTube Video by xplodivity (https://www.youtube.com/watch?v=u1yr_HZivzk&list=WL&index=49): Video explanation on how to build a multi-filter feature in react js.

 </summary>

</details>



<h1>Items.js ReadMe</h1>


<h2>Overview </h2>

<details>

The **Items.js** file defines an array named items, which contains objects representing various projects in this portfolio. Each project object includes information such as the project name, categories, images, project details, bonus images for popups, and an onClick function triggering a popup.


<H2>Usage </h2> 
The items array is designed to be imported and used in components, particularly with the **MultiFilters component**. Here's an example of how you can import and use it:

```` 
import { items } from "../ components /Items"; 
// Use the 'items' array within your component 
const YourComponent = () => { // ... }; 
export default YourComponent; 

```` 

<h2>Project Objects </h2> 
Each project object in the items array follows a similar structure:

-	**name**: The name of the project.
-	**categories**: An array of categories to classify the project (e.g., "HTML/CSS", "JavaScript", "Design").
-	**image**: The path to the main image representing the project in a grid.
-	**projectInfo**: A brief description or details about the project.
-	**bonusImage**: An array of paths to additional images or multimedia used in popups.
-	**links**: An optional array of links related to the project (e.g., project demos or documentation).
-	**onClick**: A function triggering a popup with the project name.


<h2> Popup Integration </h2> 

The Popup library is used to create popups for additional information about each project. The onClick function of each project triggers a popup using Popup.alert.


<h3> Example </h3> 

```` 
import Popup from 'react-popup'; 
import { items } from "../ components /Items"; 
const PortfolioPage = () => { 
// Use the 'items' array within your component
 Return
 ( <div> <h1>Portfolio</h1> 
 {/* Use MultiFilters or other components as needed */} 
 {/* Render projects, handle onClick to show popups */} {items.map((item, idx) => ( <div key={`project-${idx}`} 

onClick={item.onClick}> 
 
 <img src={item.image} alt={item.name} /> 
 <p>{item.name}</p> </div> ))} </div> ); };
 export default PortfolioPage; 

 ````
</summary>

</details>



<h1> CustomCursor.js ReadMe </h1> 


<h2> Overview </h2> 

<details>

The **CustomCursor.js** file defines a functional component, CustomCursor, which implements a custom cursor effect for a React application. The component utilizes state hooks to track the real-time cursor position and a slightly delayed cursor position for a visually appealing interaction. It also incorporates an effect hook to update the cursor position on mouse movement.


<h2> Usage </h2> 
To use the CustomCursor component, import it into your desired React file and include it in your JSX.

```` 
import React from "react"; 
import CustomCursor from "../ components /CustomCursor"; 
const YourComponent = () => 
{ return ( <div> {/* Other components or content */} 
<CustomCursor /> </div> ); 
}; 
export default YourComponent;

```` 
 
<H2> Features </H2> 

-	Real-time Cursor Position: The cursor position is updated in real-time as the user moves the mouse.
-	Delayed Cursor Effect: A second cursor with a slight delay in movement is created for a visually enhanced interaction.
Component Logic
State Management:
-	position: Tracks the real-time cursor position.
-	delayedPosition: Stores the cursor position with a slight delay.


<H3>Effect Hook: </H3> 

-	The useEffect hook is used to add an event listener for mouse movement, updating both the immediate and delayed cursor positions.


<H3> Cleanup: </H3>

-	A cleanup function within the effect hook removes the event listener when the component is unmounted.

<H3> Example </H3>

```` 
import React from "react"; 
import CustomCursor from "../components/CustomCursor"; 
const InteractivePage = () => 
{ return ( 
<div> <h1>Interactive Page</h1> 
{/* Other interactive components or content */} 
<CustomCursor /> </div> );
 };
 export default InteractivePage;

 ```` 

</summary>

</details>


<h1> PopupContent.js ReadMe </h1>

<h2> Overview </h2> 

<details>


The **PopupContent.js** file defines a React component, PopupContent, which is used to create the content displayed within a popup. This component is specifically designed for projects in this portfolio and provides detailed information, images, videos, and links related to each project.


<h2> Usage </h2> 

The PopupContent component is typically used when triggering a popup within a React application. It receives a project item as a prop and displays its information.

```` 
import React from "react";
 import PopupContent from "../ components /PopupContent"; 
const YourComponent = ({ projectItem }) => { 

return ( <div> 
{/* Other components or content */} 
<PopupContent item={projectItem} /> </div> );
 };
 export default YourComponent; 

 ```` 


<h2> Features </h2> 

-	Dynamic Content: Displays project information, images, videos, and links dynamically based on the provided project item.
-	Close Button: Allows users to close the popup with a close button.
-	Link Labels: Provides customized labels for project links.


<h3> Component Logic </h3> 

-	Popup Configuration: Configures the appearance and behavior of the Popup component, including default buttons and escape key behavior.
-	Link Labels: Defines labels for specific project links, enhancing the user interface.
-	Close Function: Defines a function to close the popup when the close button is clicked.

<h3> Example </h3> 

```` 
import React from "react"; 
import PopupContent from "../components/PopupContent"; 
const PortfolioPage = ({ projectItem }) => { 
return ( <div> <h1>Portfolio</h1> 
{/* Other components or content */} 
<PopupContent item={projectItem} /> </div> );
 }; 
export default PortfolioPage;

````

## Acknowledgments
Special thanks to [MinuteMailer](https://github.com/MinuteMailer) for their contribution to the Popup library used in this project.

</summary>

</details>


<h1> TextRotator.js ReadMe </h1> 


<h2> Overview </h2> 

<details>

The **TextRotator.js** file defines a React component, TextRotator, designed to rotate through a list of predefined texts at specified time intervals. This component is suitable for showcasing dynamic or changing text content on a website.


<h2> Usage </h2>

To use the TextRotator component, import it into your desired React file and include it in your JSX.

```` 
import React from "react"; 
import TextRotator from "../ components /TextRotator"; 
const YourComponent = () => { 
return ( <div> 
{/* Other components or content */} 
<TextRotator /> </div> );
 }; 
export default YourComponent; 

```` 

<h2> Features </h2> 

-	Text Rotation: Cycles through a list of predefined texts at regular intervals.
-	Dynamic Display: Renders the currently visible text dynamically based on the rotation.
Component Logic
-	Text List: Defines an array of texts to be displayed and rotated.
-	Current Index: Manages the current index of the text being displayed.
-	UseEffect Hook: Utilizes the useEffect hook to update the index at regular intervals, creating the rotation effect.
-	Interval Cleanup: Ensures that the interval is cleared when the component is unmounted, preventing memory leaks.


<h2> Customization </h2> 

You can customize the texts array with your desired content, and adjust the interval duration (currently set to 5000 milliseconds or 5 seconds) based on your preference.

<h2> Styling </h2>
The component does not include explicit styling within the provided code. You can apply your own styles based on your project's design.


<h3> Example </h3> 

```` 
import React from "react"; 
import TextRotator from "../components/TextRotator"; 
const HomePage = () => 
{ return ( <div> <h1>Welcome to My Website</h1> 
{/* Other components or content */} 
<TextRotator /> </div> );
 }; 
export default HomePage;

```` 


</summary>

</details>
