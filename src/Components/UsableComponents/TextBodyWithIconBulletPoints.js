const TextBodyWithIconBulletPoints = (props) => {
    const description = (
        <>
            <div className="project-description-content">
                <div className="project-description-title">{props.title}</div>
                <hr className="line"/>

                <div className="project-description-text">
                    {props.description}
                </div>
            </div>
        </>
    )
    const icons = props.icons
    const bullets = props.bullets

    const bulletPointsWithIcons = 
        bullets.map(
        (point, index) => 
            <li className="project-bullet-point disc" key={index}>
                <img className="project-bullet-point-icon" src={icons[index]} alt="a"/>
                {point}
            </li>
        )
    
    return(
        <>
            {description}
            {bulletPointsWithIcons}
        </>
    )

}

export default TextBodyWithIconBulletPoints;
