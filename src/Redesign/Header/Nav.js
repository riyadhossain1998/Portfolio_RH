function Nav() {

    const navBarElements = (
        <div className="navElements">
            <ul className="flex space-x-4">
                <li><a href="#" className="text-white text-lg hover:text-gray-300">Home</a></li>
                <li><a href="#" className="text-white text-lg hover:text-gray-300">Contact</a></li>
                <li><a href="#" class="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                    Download Resume
                </a></li>
            </ul>
        </div>
    )

    const navBarSocialIcons = (
        <ul className="flex space-x-2">
            <li><a href="#" class="text-white text-lg hover:text-gray-300"><img className="github object-cover h-8 w-8" src="/icons/github.png"/></a></li>

            <li><a href="#" class="text-white text-lg hover:text-gray-300"><img className="linkedin object-cover h-8 w-8" src="/icons/linkedin.png"/></a></li>

        </ul>

    )

    const navBarLogo = (
        <div className="logo">
            <a href="#" class="text-white text-xlg font-semibold">Riyad Hossain</a>
        </div>

    )

    const navBarContent = (
        <></>

    )

    const navBar = (
        <>
            <nav className="bg-gray-300 p-4">
                <div className="max-w-6xl mx-auto">
                    <div className="flex justify-between">
                        {navBarLogo}
                        
                        {navBarElements}
                    </div>
                </div>
            </nav>
        </>

    )


    return ( 
        <>
            {navBar}
        </>
     );
}

export default Nav;