import './PageContents.css';
import Section1 from './Section1';
import Section2 from './Section2';


function PageContents(props) {

    const data = props.data

    return(
        <div className="page-contents">
            <Section1 section1={data.section1}/>
            <Section2 section2={data.section2}/>
        </div>
    )
}

export default PageContents;