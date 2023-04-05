const TextBodyWithImage = (props) => {

    const imageWithTextBody = (
        <>
            <div className="project-image-wrapper">
                <div className="project-description-title">{props.title}</div>
                <img className="project-description-image" src={process.env.PUBLIC_URL + props.imageURL} alt="a"/>
                <p className="project-image-note">{props.text}</p>
            </div>
            
        </>
    )
    const imageOnly = (
        <>
            <div className="project-image-wrapper">
                <img className="project-description-image" src={process.env.PUBLIC_URL + props.imageURL} alt="a"/>
                <p className="project-image-note">{props.text}</p>
            </div>
        </>
    )
    if (props.title === undefined) {
        return(imageOnly)
    }
    else {return(imageWithTextBody)}

}

export default TextBodyWithImage;