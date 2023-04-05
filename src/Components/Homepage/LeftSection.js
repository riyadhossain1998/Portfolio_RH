
import './Sections.css'

function LeftSection(props) {
    const navElements = props.navElements
    const icons = props.icons

    

    const verticalNavBar = (
        <>
            <div className="vertical-nav">
                <div className="vertical-nav-element">
                    <img className="vertical-nav-icon" 
                    src={process.env.PUBLIC_URL + "/images/intro/portrait1.jpeg"} alt="a"/>
                    <div className="vertical-nav-text">Introduction</div>
                </div>
                <div className="vertical-nav-element">
                    <img className="vertical-nav-icon" 
                    src={process.env.PUBLIC_URL + "/images/intro/portrait1.jpeg"} alt="a"/>
                    <div className="vertical-nav-text">Portfolio</div>
                </div>
                <div className="vertical-nav-element">
                    <img className="vertical-nav-icon" 
                    src={process.env.PUBLIC_URL + "/images/intro/portrait1.jpeg"} alt="a"/>
                    <div className="vertical-nav-text">Feature Network</div>
                </div>
                <div className="vertical-nav-element">
                    <img className="vertical-nav-icon" 
                    src={process.env.PUBLIC_URL + "/images/intro/portrait1.jpeg"} alt="a"/>
                    <div className="vertical-nav-text">MusicSurf</div>
                </div>
                <div className="vertical-nav-element">
                    <img className="vertical-nav-icon" 
                    src={process.env.PUBLIC_URL + "/images/intro/portrait1.jpeg"} alt="a"/>
                    <div className="vertical-nav-text">OMS</div>
                </div>
                <div className="vertical-nav-element">
                    <img className="vertical-nav-icon" 
                    src={process.env.PUBLIC_URL + "/images/intro/portrait1.jpeg"} alt="a"/>
                    <div className="vertical-nav-text">Salad Bowl Gen</div>
                </div>
                <div className="vertical-nav-element">
                    <img className="vertical-nav-icon" 
                    src={process.env.PUBLIC_URL + "/images/intro/portrait1.jpeg"} alt="a"/>
                    <div className="vertical-nav-text">Stone Keep</div>
                </div>
                <div className="vertical-nav-element">
                    <img className="vertical-nav-icon" 
                    src={process.env.PUBLIC_URL + "/images/intro/portrait1.jpeg"} alt="a"/>
                    <div className="vertical-nav-text">Artworks</div>
                </div>
                <div className="vertical-nav-element">
                    <img className="vertical-nav-icon" 
                    src={process.env.PUBLIC_URL + "/images/intro/portrait1.jpeg"} alt="a"/>
                    <div className="vertical-nav-text">Contact</div>
                </div>
                
            </div>
        </>
    )

    return (
        <>
            <div className="left-section">
                {verticalNavBar}
            </div>
        </>
    )
}

export default LeftSection;