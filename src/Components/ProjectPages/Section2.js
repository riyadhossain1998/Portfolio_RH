import './Section2.css'
import BulletPointsWithIcon from '../UsableComponents/BulletPointsWithIcon'

import BulletPointsWithTitle from '../UsableComponents/BulletPointsWithTitle'
import TextBodyWithTitle from '../UsableComponents/TextBodyWithTitle'

function Section2(props) {
    const section2 = props.section2

    return(

        <div className="section2">

            <TextBodyWithTitle 
                title="Summary"
                description={section2.summary}
                />

            <BulletPointsWithTitle
                title="Responsibilities"
                bullets={section2.roles}
                />



            <BulletPointsWithIcon
                title="Technologies"
                bullets={section2.techStack}
                icons={section2.techStackIcons}
                
                />

            <TextBodyWithTitle 
                title="Design Remarks"
                description={section2.designRemarks}
                />

            <BulletPointsWithTitle
                title="Lessons Learned"
                bullets={section2.lessonsLearned}
                
                />
            <TextBodyWithTitle
                title="Next Steps"
                description={section2.nextSteps}
                />

            
        </div>
    );
}

export default Section2;