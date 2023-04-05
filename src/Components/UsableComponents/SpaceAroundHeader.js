const SpaceAroundHeader = (props) => {

    const spaceAroundHeader = (
        <>
            <div className="project-description-header">
                <div className="project-description-header-item">{props.title1}</div>
                <div className="project-description-header-item">{props.title2}</div>
            </div>
        </>
    )
    return(spaceAroundHeader)

}

export default SpaceAroundHeader;