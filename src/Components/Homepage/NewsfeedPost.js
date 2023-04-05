import './NewsfeedPost.css'

const NewsFeedPost = () => {

    const imgURL = process.env.PUBLIC_URL + "/images/intro/portrait1.jpeg"
    const title = "Title"
    const subtitle = "Subtitle"
    const descriptionText = "Descr"
    const previewURL = ""
    const githubURL = ""
    

    const displayPhoto = (
        <div className="post-image">
            <img src={imgURL} alt="a"/>
        </div>
    )

    const textWrapper = (
        <div className="post-text-wrapper">
            <div className="post-title">
                {title}
            </div>
            <div className="post-subtitle">
                {subtitle}
            </div>
        </div>
    )

    const bio = (
        <div className="post-bio">
            {displayPhoto}
            {textWrapper}
        </div>
    )

        
    const description = (
        <div className="post-description">
            {descriptionText}
        </div>
    )

    const postButtons = (
        <div className="post-buttons">
            <div className="post-button preview">
                <a href={previewURL}>
                    <img src={process.env.PUBLIC_URL + "/icons/preview.png"} alt="a"/>
                </a>
            </div>
            <div className="post-button github">
                <a href={githubURL}>
                    <img src={process.env.PUBLIC_URL + "/icons/github.png"} alt="a"/>
                </a>
            </div>
            
        </div>
    )




    const post = (
        <div className="post">
            {bio}
            {description}
            {postButtons}            
        </div>
    )

    return (
        <>
            {post}
        </>
    )

}

export default NewsFeedPost;