const BulletPointsWithTitle = (props) => {
    const bullets = props.bullets
    const bulletPoints = 
        bullets.map(
        (point, index) => 
            <li className="project-bullet-point" key={index}>{point}</li>
        )
    return (
        <>
            <div className="project-description-list">
                
                <div className="project-description-title">{props.title}</div>
                <hr className="line"/>

                {bulletPoints}
            </div>
        </>
    )
    
}
export default BulletPointsWithTitle;