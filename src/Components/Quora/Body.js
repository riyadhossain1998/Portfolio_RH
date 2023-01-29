import SkillsFeed from './SkillsFeed'
import Feed from './Feed'
import Projects from './Projects'
import './Stylesheets/Body.css'

function Body() {
    return(
        <div className="container-fluid">
            <div className="body-row row">
                <div className="col-md-12">
                    <div className="row px-5">
                        <div className="col-md-3">
                            <Projects />
                        </div>
                        <div className="col-md-6">
                            <Feed />
                        </div>
                        <div className="col-md-3">
                            <SkillsFeed />
                        </div>
                    </div>
                </div>
	        </div>
        </div>
    );
}

export default Body;