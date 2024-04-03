import './Stylesheets/NavBar.css'
/*
//import Page from '../ProjectPages/Page'
//import { useState } from 'react'
function NavBar(props) {
    //const [style, setStyle] = useState({ color: 'black' });
    //const [bgColor, setBgColor] = useState({ backgroundColor: '#282828' });

    function skillsCSS() {
        const skills = document.querySelectorAll('.skills');
        const skillsHeaders = document.querySelectorAll('.skills h5');
        const skillsParagraphs = document.querySelectorAll('.skills p');

        skills.forEach(skill => {
            skill.style.backgroundColor = '#282828';
            //skill.style.border = '#1db954 2px solid';
            skill.style.boxShadow = '0.25rem 0.25rem 0.3rem rgba(255,255,255,.25)';        

        });

        skillsParagraphs.forEach(skill => {
            skill.style.color = '#fff';
        });

        skillsHeaders.forEach(skill => {
            skill.style.color = '#1db954';
        });

        skillsParagraphs.forEach(skill => {
            skill.style.color = '#fff';
        });


        skillsHeaders.forEach(skill => {
            skill.style.fontFamily = 'Circular-Black';
            skill.style.color = '#1db954';
            

        });

                  
        const courseAnchor = document.querySelectorAll('.course a');
        const courses = document.querySelectorAll('.course');

        courses.forEach(course => {
            course.style.fontFamily = 'Circular-Light';
        });
        courseAnchor.forEach(course => {
            course.style.color = '#1db954';
            course.style.fontFamily = 'Circular-Medium';

        });
    }
    function projectCSS() {
        document.querySelector('.card-header').style.color = '#fff';
        
        const cards = document.querySelectorAll('.card');
        const descriptions = document.querySelectorAll('.description');
        const cardTitles = document.querySelectorAll('.card-title');
        const cardHeader = document.querySelectorAll('.card-header');
        const collapseButtons = document.querySelectorAll('.collapse-button');
        const smallText = document.querySelectorAll('.small-text');
        const cardImages = document.querySelectorAll('.rounded-circle');
        

        const highlights = document.querySelectorAll('.highlight');
        highlights.forEach(highlight => {
            highlight.style.color = '#1db954';
            highlight.style.backgroundColor = '#282828';
        });

        cardHeader.forEach(header => {
            header.style.backgroundColor = '#282828';
        });

        document.querySelector('.carousel-control-prev').style.backgroundColor = '#1db954';
        document.querySelector('.carousel-control-next').style.backgroundColor = '#1db954';
        cardImages.forEach(image => {
            image.style.border = '#1db954 2px solid';
        });
        
        smallText.forEach(text => {
            text.style.fontFamily = 'Circular-Light';
            text.style.color = '#B3B3B3';
            text.classList.remove('text-muted');
        });

        cardTitles.forEach(title => {
            title.style.color = '#1db954';
            title.style.fontFamily = 'Circular-Bold';
            title.style.fontSize = '1.45rem';
        });

        descriptions.forEach(description => {
            description.style.color = '#fff';
            description.style.fontFamily = 'Circular-Light';
        });

        cards.forEach(card => {
          card.style.backgroundColor = '#282828';
          //card.style.border = '#1db954 2px solid';
          // add shadow to the bottom of the card
          card.style.boxShadow = '0.25rem 0.25rem 0.3rem rgba(25,185,84,.5)';
        });

        collapseButtons.forEach(button => {
            button.style.color = '#fff';
            button.style.fontFamily = 'Circular-Bold';
            }
        );
    }
    function navBarCSS() {
        document.querySelector('.navig-bar').style.backgroundColor = '#1db954';
        document.querySelector('.navig-bar').style.color = 'white';

        document.querySelector('.navbar-brand').style.color = '#fff';
        document.querySelector('.navbar-brand').style.fontFamily = 'Circular-Bold';
        document.querySelector('.nav-link').style.fontFamily = 'Circular-Medium'
        //document.querySelector('.body-row').style.backgroundColor = '';
        


        document.querySelector('nav').style.boxShadow = '0 4px 20px rgba(255,255,255,.5)';
    }   
    function leftNav() {
        const elements = document.querySelectorAll('.btn-custom');
        elements.forEach(element => {
            element.style.backgroundColor = '#1db954';
            element.style.color = '#fff';
            element.style.fontFamily = 'Circular-Bold';
            element.style.fontSize = '0.80rem';
            //element.style.border = '#1db954 2px solid';
            element.style.boxShadow = '0.25rem 0.25rem 0.3rem rgba(255,255,255,.25)';
            }
        );
        
        const active = document.querySelector('.active');
        active.style.backgroundColor = '#282828';
        active.style.color = '#fff';

    }
    function projectPageCSS() {
        document.querySelector('.page-contents').style.backgroundColor = '#282828';
        document.querySelector('.page-contents').style.color = '#fff';
        document.querySelector('.page-contents').style.fontFamily = 'Circular-Light';

        document.querySelector('.section2').style.border = '#1db954 2px solid';
        const navButtons = document.querySelectorAll('.project-navbar-item');
        navButtons.forEach(button => {
            button.style.border = '#1db954 2px solid';
            
        });


        const projectButtons = document.querySelectorAll('.project-button-anchorwrap');
        projectButtons.forEach(button => {
            button.style.backgroundColor = '#1db954';
            button.style.color = '#fff';
            button.style.fontFamily = 'Circular-Bold';
            button.style.fontSize = '0.80rem';
            //button.style.border = '#1db954 2px solid';
            
            }
        );

        document.querySelector('.project-title').style.color = '#1db954';
        document.querySelector('.project-title').style.fontFamily = 'Circular-Black';
        document.querySelector('.project-footnote').style.color = '#B3B3B3';
        document.querySelector('.project-footnote').style.fontFamily = 'Circular-Light';
        const projectIconWrapper = document.querySelectorAll('.project-icon-text-wrapper');
        projectIconWrapper.forEach(wrapper => {
            wrapper.style.backgroundColor = '#1db954';
            wrapper.style.color = '#fff';
            wrapper.style.borderColor = '#1db954';
            
            
        });
        const imageDescription = document.querySelectorAll('.project-image-note');
        imageDescription.forEach(description => {
            description.style.color = '#B3B3B3';
            description.style.fontFamily = 'Circular-LightItalic';
        
        });

        const projectTitles = document.querySelectorAll('.project-description-title');
        projectTitles.forEach(title => {
            title.style.color = '#fff';
            title.style.fontFamily = 'Circular-Bold';
            title.style.fontSize = '1.45rem';
        });

        const bullets = document.querySelectorAll('.project-bullet-point');
        bullets.forEach(bullet => {
            bullet.style.fontFamily = 'Circular-Light';
        }
        );

        const projectDescriptions = document.querySelectorAll('.project-description-text');
        projectDescriptions.forEach(description => {
            description.style.color = '#fff';
            description.style.fontFamily = 'Circular-Light';
        }
        );

       

    }


    const handleButtonClick = () => {
        if(props.location === 'page') {
            navBarCSS();
            projectPageCSS();
        }
        else {
            document.querySelector('.body-row').style.background = 'linear-gradient(180deg, #1A0F3D 0%, #151024 8%, #121212 16%, #121212 100%)';
            navBarCSS();
            projectCSS();
            skillsCSS();
            leftNav();
        }
    };

    return  (
            <div className="nav-row row">
                <div className="nav-col col-md-12 navig-bar">
                    <nav className="navbar navbar-expand-lg navbar-light navig-bar">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                            <span className="navbar-toggler-icon"></span>
                        </button> 

                        
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <div className="col-md-3">
                                <a className="navbar-brand" href="/">Riyad Hossain</a>
                            </div>
                            <div className="col-md-3">
                                <a className="nav-link quora-th" href="/">Quora Theme</a>
                            </div>
                            <div className="col-md-3">
                                <div className="nav-link spotify-th" onClick={handleButtonClick}>Spotify Theme</div>
                            </div>
                            <div className="col-md-3">
                            <a className="mr-4 hover-css" data-content="Download Resume" href="./resumes/FEUX-RH-Resume.pdf" download="RH_Resume"><img className="icons" alt="icon-download" src={process.env.PUBLIC_URL + "./icons/downloads.png"} /></a>
                            <a className="mr-4 hover-css" data-content="GitHub" href="https://github.com/riyadhossain1998" title="github icons"><img className="icons" alt="icon-github" src={process.env.PUBLIC_URL + "./icons/github.png"}/></a>
                            <a className="mr-4 hover-css" data-content="LinkedIn" href="https://linkedin.com/in/riyad-hossain-30773914b" title="linkedin icons"><img className="icons" alt="icon-linkedin" src={process.env.PUBLIC_URL + "./icons/linkedin.png"}/></a>

                                    
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        
    );
}

export default NavBar;

*/
import './Stylesheets/NavBar.css'
function NavBar() {

    const navBarSocialIcons = (
        <ul className="flex space-x-2">
            <li><a href="/" className="text-white text-lg hover:text-gray-300"><img className="github object-cover h-8 w-8" src="/icons/github.png"/></a></li>

            <li><a href="/" className="text-white text-lg hover:text-gray-300"><img className="linkedin object-cover h-8 w-8" src="/icons/linkedin.png"/></a></li>

        </ul>

    )

    const navBarElements = (
        <div className="navElements">
            <ul className="flex space-x-4 items-center">
                <li></li>
                <li>{navBarSocialIcons}</li>
                <li>
                    <a href="./resumes/UX-Resume-RH.pdf" download="RH_Resume_UX" className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-white bg-green-600 rounded-lg hover:bg-green-400 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                    <img className="object-cover h-4 w-4 mr-2" src="/icons/download.png"/> Customer Service Resume
                    </a>
                </li>
                <li>
                    <a href="./resumes/Resume.pdf" download="RH_Resume_CS" className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-white bg-green-600 rounded-lg hover:bg-green-400 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                    <img className="object-cover h-4 w-4 mr-2" src="/icons/download.png"/> UX Resume
                    </a>
                </li>
            </ul>
        </div>
    )

    

    const navBarLogo = (
        <div className="logo">
            <a href="/" className="text-red-800">Riyad Hossain</a>
        </div>

    )

    const navBarContent = (
        <></>

    )

    const navBar = (
        <>
            <nav className="bg-white-700 p-4">
                <div className="max-w-6xl mx-auto">
                    <div className="flex justify-between items-center">
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

export default NavBar;