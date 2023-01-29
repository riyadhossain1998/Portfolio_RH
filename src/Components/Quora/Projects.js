import { useState, useEffect } from 'react';


import './Stylesheets/Projects.css'

function Projects() {
    const [activeButton, setActiveButton] = useState("Home");// Display

    function handleClick(e) {
        setActiveButton(e.target.innerText);
        const element = document.getElementById(e.target.dataset.id);
        console.log(element)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    
    }

    return (
        <div className="btn-group-vertical mt-5" role="group">
            <button type="button" data-id="1" className={`btn btn-custom ${activeButton === "Home" ? "active" : ""}`} onClick={handleClick}><img src="./baby_cheems.png"/><b>Home</b></button>            
            <button type="button" data-id="2" className={`btn btn-custom ${activeButton === "UI/UX Experience" ? "active" : ""}`} onClick={handleClick}><img src="./baby_cheems.png"/><b>UI/UX</b> | MusicSurf</button>
            <button type="button" data-id="6" className={`btn btn-custom ${activeButton === "UI/UX Experience" ? "active" : ""}`} onClick={handleClick}><img src="./baby_cheems.png"/><b>UI/UX</b> | Order Management System</button>
            <button type="button" data-id="3" className={`btn btn-custom ${activeButton === "HTML/CSS/JS Experience" ? "active" : ""}`} onClick={handleClick}><img src="./baby_cheems.png"/><b>Website</b> Salad Bowl Generator</button>
            <button type="button" data-id="7" className={`btn btn-custom ${activeButton === "HTML/CSS/JS Experience" ? "active" : ""}`} onClick={handleClick}><img src="./baby_cheems.png"/><b>Python & Webpage</b> | Feature Network</button>
            <button type="button" data-id="4" className={`btn btn-custom ${activeButton === "Unity/C# Experience" ? "active" : ""}`} onClick={handleClick}><img src="./baby_cheems.png"/><b>Unity & C#</b> | Stone Keep</button>
            <button type="button" data-id="5" className={`btn btn-custom ${activeButton === "Artwork" ? "active" : ""}`} onClick={handleClick}><img src="./baby_cheems.png"/><b>Artworks</b></button>
        </div>
    );

}



/*
create 4 vertical buttons in bootstrap with spacing between them, add some drop shadow and the color of the button should be #E6E7E8
*/

export default Projects;