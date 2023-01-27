import NavBar from './Quora/NavBar'
import './Quora/Projects'
import './Quora/SkillsFeed'
import Body from './Quora/Body'



function Quora() {
    return(
        <div className="quora">
            <NavBar />
            <Body />
        </div>
        
    );
}

export default Quora;