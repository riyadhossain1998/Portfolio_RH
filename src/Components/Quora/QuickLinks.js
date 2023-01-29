import './Stylesheets/QuickLinks.css'
import { useState } from 'react';
function QuickLinks() {
    const [activeButton, setActiveButton] = useState("Home");// Display

    function handleClick(e) {
        setActiveButton(e.target.innerText);
        
    }
    return(
        <div className="quick-links container mt-5">
            <div className="btn-group-vertical" role="group">
            <button type="button" className={`btn btn-custom ${activeButton === "Home" ? "active" : ""}`} onClick={handleClick}>Home</button>
            <button type="button" className={`btn btn-custom ${activeButton === "Projects" ? "active" : ""}`} onClick={handleClick}>Projects</button>
            <button type="button" className={`btn btn-custom ${activeButton === "Illustrator" ? "active" : ""}`} onClick={handleClick}>Illustrator</button>
            <button type="button" className={`btn btn-custom ${activeButton === "Photoshop" ? "active" : ""}`} onClick={handleClick}>Photoshop</button>
            <button type="button" className={`btn btn-custom ${activeButton === "ZBrush" ? "active" : ""}`} onClick={handleClick}>ZBrush</button>
        </div>
        </div>
    );
}


export default QuickLinks;