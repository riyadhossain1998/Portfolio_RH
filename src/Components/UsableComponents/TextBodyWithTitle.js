const TextBodyWithTitle = (props) => {
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

    return(description)
}
export default TextBodyWithTitle;
/*




*/