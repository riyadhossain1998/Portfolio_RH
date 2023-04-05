import './Newsfeed.css';
import LeftSection from './LeftSection'
import RightSection from './RightSection'
import MiddleSection from './MiddleSection'

import rightData from '../../Data/HomeData/rightData.json'

function Newsfeed() {
    const leftData = {
        icons: ['/images/icons/placeholder.png', '/images/icons/placeholder.png', '/images/icons/placeholder.png'],
        text: ['Placeholder', 'Placeholder', 'Placeholder']
    }
    const middleData = ''
    console.log(rightData)
    
    return (
        <>
            <div className="newsfeed">
                <LeftSection leftData={leftData}/>
                <MiddleSection middleData={middleData}/>
                <RightSection rightData={rightData}/>
            </div>
        </>

    )
}

export default Newsfeed;