import Project from './Project'
import { useState } from 'react';
import intro from '../../Data/intro.json';
import musicsurf from '../../Data/musicsurf.json'
import Feed from './Feed'

import './Stylesheets/Projects.css'

function Projects() {
    const [activeButton, setActiveButton] = useState("Home");// Display

    function handleClick(e) {
        setActiveButton(e.target.innerText);
        
    }

    return (
        <div className="btn-group-vertical" role="group">
            <button type="button" className={`btn btn-custom ${activeButton === "Home" ? "active" : ""}`} onClick={handleClick}>Home</button>
            <button type="button" className={`btn btn-custom ${activeButton === "Projects" ? "active" : ""}`} onClick={handleClick}>Projects</button>
            <button type="button" className={`btn btn-custom ${activeButton === "Illustrator" ? "active" : ""}`} onClick={handleClick}>Illustrator</button>
            <button type="button" className={`btn btn-custom ${activeButton === "Photoshop" ? "active" : ""}`} onClick={handleClick}>Photoshop</button>
            <button type="button" className={`btn btn-custom ${activeButton === "ZBrush" ? "active" : ""}`} onClick={handleClick}>ZBrush</button>
        </div>
    );

}


/*
create 4 vertical buttons in bootstrap with spacing between them, add some drop shadow and the color of the button should be #E6E7E8
*/

export default Projects;