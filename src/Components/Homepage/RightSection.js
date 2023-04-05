import './Sections.css'

import BulletPointsWithIcon from '../UsableComponents/BulletPointsWithIcon'

function RightSection(props) {

    

    const rightSection = (
        <>
            <div className="right-section">
                <div className="right-section-title">Work Experience</div>
                <div className="right-section-subtext">Full-Stack Web Developer</div>
                <div className="right-section-subtext">May 2021 - Present</div>
                <div className="right-section-subtext">Freelance</div>
                <div className="right-section-subtext">Remote</div>
                <div className="right-section-subtext">I am currently working on a freelance project for a client. I am building a website for a local business. I am using React.js for the front-end and Node.js for the back-end. I am also using MongoDB for the database. I am also using Bootstrap for the styling.</div>
            </div>
        </>
    )
    return(
        <>
            {rightSection}
        </>
        )
}

export default RightSection;