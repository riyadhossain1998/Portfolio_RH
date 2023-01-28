import './Stylesheets/SkillsFeed.css'

function SkillsFeed() {
    return(
        <div className="container mt-4">

            <div className="skills mt-4">
                <h5>Coursework</h5>
                <p className="course"><a href="https://contacts.ucalgary.ca/info/cpsc/courses/f18/CPSC355">Computer Machinery I </a> · C & Assembly </p>
                <p className="course"><a href="https://contacts.ucalgary.ca/info/cpsc/courses/w19/CPSC319?destination=courses%2Fw19">Data Structures & Algorithms </a> · Java </p>
                <p className="course"><a href="https://contacts.ucalgary.ca/info/cpsc/courses/p19/SENG300?destination=courses%2Fp19">Software Engineering </a> · Software Development Lifecycle, Java, Agile </p>
                <p className="course"><a href="https://contacts.ucalgary.ca/info/cpsc/courses/f19/CPSC359?destination=courses%2Ff19">Computer Machinery II </a> · Raspberry PI & C++ </p>
                <p className="course"><a href="">Human Computer Interaction I </a> · Adobe XD & Illustrator </p>
                <p className="course"><a href="">Data Base Management Systems </a> · MySQL, HTML, CSS, JavaScript, NodeJS </p>
                <p className="course"><a href="">Human Computer Interaction II </a> · HTML, CSS, JavaScript, BootStrap </p>
                <p className="course"><a href="">Computer Networks </a> · Socket Programming with C++ </p>
                <p className="course"><a href="">Media Arts & Theory </a> · Adobe Photoshop </p>
                <p className="course"><a href="">Digital Illustration </a> · Adobe Illustrator </p>
                <p className="course"><a href="">Computer Game Design </a> · Unity, C#, Adobe Illustrator </p>
                <p className="course"><a href="">Digital Sculpture</a> · ZBrush </p>
            </div>

            <div className="skills mt-4">
                <h5>Programming</h5>
                <p>React/JavaScript/HTML/CSS</p>
                <p>C# & Unity</p>
                <p>Python</p>
                <p>Java</p>
            </div>

            <div className="skills mt-4">
                <h5>Design, Art & Video</h5>
                <p>Figma & Adobe XD</p>
                <p>Illustrator & Photoshop</p>
                <p>Premiere & After Effects</p>
            </div>

           <div className="skills mt-4">
                <h5>Documentation & Research</h5>
                <p>Using mostly Google & ChatGPT for research</p>
                <p>Google Docs for design documentation</p>
                <p>Trello for setting tasks</p>
                <p>Miro for design outline & brainstorming</p>
                <p>Agile for team communication & progress reports</p>
           </div>


        </div>
    );
}

export default SkillsFeed;