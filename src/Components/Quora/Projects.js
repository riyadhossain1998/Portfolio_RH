import { useState } from 'react';
import './Stylesheets/Projects.css'

function Projects() {
    const [activeButton, setActiveButton] = useState("Home");// Display

    function handleClick(e) {
        setActiveButton(e.target.textContent);  //  Active tab
        const element = document.getElementById(e.target.dataset.id);   //  data_id of button = div of element being scrolled to
        
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' }); //  Scroll to view 
        }
    
    }

    return (
        <div className="btn-group-vertical mt-5" role="group">
            <button type="button" data-id="1" 
                className={`btn btn-custom ${activeButton === "Home" ? "active" : ""}`} 
                onClick={handleClick}>
                    <img src="./baby_cheems.png"/><b>Home</b>
            </button>            
            <button type="button" data-id="6" 
                className={`btn btn-custom ${activeButton === "UI/UX | Order Management System" ? "active" : ""}`} 
                onClick={handleClick}>
                    <img src="./baby_cheems.png"/><b>UI/UX</b> | Order Management System
            </button>
            <button type="button" data-id="2" 
                className={`btn btn-custom ${activeButton === "UI/UX | MusicSurf" ? "active" : ""}`} 
                onClick={handleClick}>
                    <img src="./images/musicsurf/Logo.png"/><b>UI/UX</b> | MusicSurf
            </button>
            <button type="button" data-id="7" className={`btn btn-custom ${activeButton === "Python & Webpage | Feature Network" ? "active" : ""}`} onClick={handleClick}><img src="./baby_cheems.png"/><b>Python & Webpage</b> | Feature Network</button>
            <button type="button" data-id="3" className={`btn btn-custom ${activeButton === "Website | Salad Bowl Generator" ? "active" : ""}`} onClick={handleClick}><img src="./images/saladtime/saladtime.png"/><b>Website</b> | Salad Bowl Generator</button>
            <button type="button" data-id="4" className={`btn btn-custom ${activeButton === "Unity & C# | Stone Keep" ? "active" : ""}`} onClick={handleClick}><img src="./images/stonekeep/stonekeep.png"/><b>Unity & C#</b> | Stone Keep</button>
            <button type="button" data-id="5" className={`btn btn-custom ${activeButton === "Artworks" ? "active" : ""}`} onClick={handleClick}><img src="./images/art/plakatsil.png"/><b>Artworks</b></button>
        </div>
    );

}



/*
create 4 vertical buttons in bootstrap with spacing between them, add some drop shadow and the color of the button should be #E6E7E8
*/

export default Projects;