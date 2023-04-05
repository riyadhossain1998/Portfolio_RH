const ToggleHideBulletPoints = (props) => {
    const [hide, setHide] = useState(false)
    const [buttonText, setButtonText] = useState("Hide")
    const [buttonIcon, setButtonIcon] = useState(process.env.PUBLIC_URL + "/images/minus.png")
    const [buttonClass, setButtonClass] = useState("project-button-anchorwrap")
    const [buttonStyle, setButtonStyle] = useState({})

    const toggleHide = () => {
        if (hide) {
            setHide(false)
            setButtonText("Hide")
            setButtonIcon(process.env.PUBLIC_URL + "/images/minus.png")
            setButtonClass("project-button-anchorwrap")
            setButtonStyle({})
        } else {
            setHide(true)
            setButtonText("Show")
            setButtonIcon(process.env.PUBLIC_URL + "/images/plus.png")
            setButtonClass("project-button-anchorwrap-hide")
            setButtonStyle({pointerEvents: "none"})
        }
    }

    const button = (
        <>
            <a className={buttonClass} href="#" onClick={toggleHide} style={buttonStyle}>
                <img
                    src={buttonIcon} 
                    className="project-bullet-point-icon" 
                    alt="icon"
                />
                <div className="project-button-text">{buttonText}</div>
            </a>
        </>
    )

    const bulletPoints = (
        <>
            <div className="project-description-list">
                <div className="project-description-title">{props.title}</div>
                <hr className="line"/>
                {props.children}
            </div>
        </>
    )

    return (
        <>
            {button}
            {hide ? null : bulletPoints}
        </>
    )
}