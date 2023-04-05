import './Sections.css'
import NewsfeedPost from './NewsfeedPost'


function MiddleSection(props) {
    const middleData = props.middleData
    const middleSection = (
        <>
            <div className="middle-section">
                <NewsfeedPost />
                <NewsfeedPost />
            </div>
        </>
    )
    return(
        <>
            {middleSection}
        </>
        )
}
export default MiddleSection;