
import Project from './Project'
import intro from '../../Data/intro.json'
import musicsurf from '../../Data/musicsurf.json'
import saladtime from '../../Data/saladtime.json'
import art from '../../Data/art.json'
import stonekeep from '../../Data/stonekeep.json'
import oms from '../../Data/oms.json'
import featurenet from '../../Data/featurenet.json'

function Feed() {
    return (
        <div className="feed">
            <Project data={intro} />
            <Project data={musicsurf} />
            
            <Project data={featurenet} />
            <Project data={saladtime} />
            
            <Project data={stonekeep} />

            <Project data={art} />
        </div>
       

    );
}



export default Feed;