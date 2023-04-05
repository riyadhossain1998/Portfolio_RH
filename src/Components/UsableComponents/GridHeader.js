import { Link } from 'react-router-dom';
const GridHeader = (props) => {

    const buttonLinks = props.buttonLinks
    const buttonList = 
        buttonLinks.map(
            (link, index) =>
                    <a className="project-button-anchorwrap" href={link} key={"link"+index}>
                        <img
                            src={process.env.PUBLIC_URL + props.buttonIcons[index]} 
                            className="project-bullet-point-icon" 
                            alt="icon"
                            key={"icon"+index} 
                        />
                        <div className="project-button-text" key={"btn"+ index}>{props.buttonText[index]}</div>
                    </a>
                
            )
    

    const gridHeader = (
        <>
            <div className="project-header">
                <div className="project-header-left">
                    <div className="item project-img"><img src={process.env.PUBLIC_URL + props.displayImage} alt="a"/></div>
                </div>
                <div className="project-header-right">
                    <div className="item project-title">{props.title}</div>
                    <div className="item project-footnote">{props.footnote}</div>
                    <div className="item project-button-list">
                        {buttonList}
                    </div>
                </div>
               
            </div>
        </>
    )


    return(gridHeader)
}
export default GridHeader;