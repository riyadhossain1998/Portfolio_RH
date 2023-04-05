
const BulletPointsWithIcon = (props) => {
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
    return (
        <>
            <div className="project-description-list">
                <div className="project-description-title">{props.title}</div>
                <hr className="line"/>
                {bulletPointsWithIcons}
            </div>
        </>

    )
}

export default BulletPointsWithIcon;