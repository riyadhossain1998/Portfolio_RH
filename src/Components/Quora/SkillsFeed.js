import './Stylesheets/SkillsFeed.css'

function SkillsFeed() {
    return(
        <div className="container mt-4">

            <div className="skills mt-4">
                <h5>Coursework</h5>
                <p><a href="#">Data Structures & Algorithms</a> (Java)</p>
                <p>Computer Machinery I & II (C/C++)</p>
                <p>Human Computer Interaction I & II (Adobe XD, HTML/CSS/JS)</p>
                <p>Software Engineering (Java)</p>
                <p>Database Management Systems (MySQL)</p> 
                <p>Computer Networks (C++)</p>
                <p>Media Arts & Theory (Adobe Photoshop)</p>
                <p>Digital Illustration (Adobe Illustrator)</p>
                <p>Computer Game Design (Unity, C#, Adobe Illustrator)</p>
                <p>Digital Sculpture (ZBrush)</p>
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