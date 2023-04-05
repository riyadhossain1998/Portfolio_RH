const ScrollToViewNavBar = (props) => {
    const navBarList = props.navBarList
    const navBarElements = 
        navBarList.map(
            (element, index) =>
                <div className="project-navbar-item" key={index}>{element}</div>
            )
    const navBar = (
        <>
            <div className="project-navbar">
                {navBarElements}
            </div>
        </>
    )
    return(navBar)
}

export default ScrollToViewNavBar;