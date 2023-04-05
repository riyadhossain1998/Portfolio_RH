const TextBodyWithIcon = (props) => {

    const textBodyWithIcon = (
        <>
        <div className="project-icon-text">
            <div className="project-icon-text-wrapper">
                <img className="project-icon" src={props.iconURL1} alt="a"/>
                <div className="project-description-title">{props.title1}</div>
                <p className="project-description-text">{props.description1}</p>
            </div>
            <div className="project-icon-text-wrapper">
                <img className="project-icon" src={props.iconURL2} alt="a"/>
                <div className="project-description-title">{props.title2}</div>
                <p className="project-description-text">{props.description2}</p>


            </div>
        </div>
            
        </>
    )
    return(textBodyWithIcon)

}

export default TextBodyWithIcon;