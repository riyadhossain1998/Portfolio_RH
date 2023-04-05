import NavBar from '../Quora/NavBar'
import PageContents from './PageContents'


function Page(props) {


    window.onpopstate = function(event) {
        if(event) {
        window.location.reload();
        }
      };
    
    const data = props.data
    return (
        <>
            <NavBar />
            <PageContents data={data}/>
        </>
        
    );
}

export default Page;