import './Section1.css'

import GridHeader from '../UsableComponents/GridHeader'
import ScrollToViewNavBar from '../UsableComponents/ScrollToViewNavBar'
import TextBodyWithIcon from '../UsableComponents/TextBodyWithIcon'
import TextBodyWithImage from '../UsableComponents/TextBodyWithImage'


function Section1(props) {
    
    const section1 = props.section1
    //console.log(section1)


    const sketches = section1.sketch.map((element, index) => {
        if (index !== 0) {
            return (
                <TextBodyWithImage
                    imageURL={element.url}
                    text={element.subText}
                    />
            )
        }
        else {
            return (
                <TextBodyWithImage title="Sketches"
                    imageURL={element.url}
                    text={element.subText}
                    />
            )
        }
    })

    const wireframes = section1.wireframes.map((element, index) => {
        if (index !== 0) {
            return (
                <TextBodyWithImage
                    imageURL={element.url}
                    text={element.subText}
                    />
            )
        }
        else {
            return (
                <TextBodyWithImage title="Wireframes"
                    imageURL={element.url}
                    text={element.subText}
                    />
            )
        }
    })

    const currentDesign = section1.currentDesign.map((element, index) => {
        if (index !== 0) {
            return (
                <TextBodyWithImage
                    imageURL={element.url}
                    text={element.subText}
                    />

            )
        }
        else {
            return (
                <TextBodyWithImage title="Current Design"
                    imageURL={element.url}
                    text={element.subText}
                    />
            )
        }
    })


    
  
    return (
        <div className="section1">
                <GridHeader
                    displayImage={section1.displayImage}
                    title={section1.title}
                    footnote={section1.footnote}
                    buttonIcons={section1.buttonIcons}
                    buttonLinks={section1.buttonLinks}
                    buttonText={section1.buttonText}
                    />

                <ScrollToViewNavBar
                    navBarList={section1.navBarElements}/>
                
                <TextBodyWithIcon  
                    title1="Problem"   title2="Solution"
                    iconURL1="https://img.icons8.com/ios/50/000000/idea.png"    
                    iconURL2="https://img.icons8.com/ios/50/000000/idea.png"
                    description1={section1.problem}   
                    description2={section1.solution}
                    />
                
                {sketches}

                {wireframes}
                
                {currentDesign}
        </div>
    );
}

export default Section1;