import intro from '../../Data/intro.json';
import musicsurf from '../../Data/musicsurf.json';
import './Home.css'



import NavBar from './NavBar';

import Newsfeed from './Newsfeed'
function Home() {
    return (
        <>  
            <NavBar />
            <Newsfeed />
        </>
    )
}
export default Home;