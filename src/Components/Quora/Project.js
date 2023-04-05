
import './Stylesheets/Project.css'
import DOMPurify from 'dompurify'
import { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'





function Project(props) {
    let desc = ''
    let carousel = ''
    let bullet_points = '<ul></ul>'
   
    const json_data = props.data


    
    desc = json_data.paragraph

    const history = useHistory()


    //  Description formatting
    desc.replace(/\\n/g, '\n');
    const boldDesc = desc.replace(/;(.*?);/g, "<b>$1</b>"); //  use ;; in JSON for bold typeface
    const sanitizedText = boldDesc.replace(/<b>/g, "<span class='highlight'>").replace(/<\/b>/g, "</span>");
    desc = DOMPurify.sanitize(sanitizedText)

    //  Bullet Points render
    
    bullet_points = json_data.bullet_pts.map((bullet, index) => 
      <li className="bullet-pts" key={index}>{bullet}</li>)
    
    
    const [description, setDescription] = useState(desc)

    function handleDescView(event) {
      // use hooks to toggle more/less 
      setDescription(desc.substring(0, 100))
    
        
    }
    function routingTo() {
      history.push(`${json_data.post_tag}`)
      // rerender the page
    

    }

   

    //  Carousel render
    if(json_data.images.length > 0 && json_data.post_tag == 'Art') {
      carousel = (<div id={`carouselExampleIndicators-${json_data.post_id}`} className="carousel slide mt-4" data-interval="false">
        <ol className="carousel-indicators">
          {json_data.images.map((image, index) => (
            <li key={index} data-target={`#carouselExampleIndicators-${json_data.post_id}`} data-slide-to={index} className={index === 0 ? "active" : ""}></li>              
            ))}
        </ol>
        <div className="carousel-inner">
          {json_data.images.map((image, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
              <img className="d-block w-100" src={process.env.PUBLIC_URL + image} alt={`Slide ${index + 1}`} style={{ objectFit: 'cover', width: '100%' }} />
            </div>
          ))}
        </div>
        <a className="carousel-control-prev" href={`#carouselExampleIndicators-${json_data.post_id}`} role="button" data-slide="prev">              
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href={`#carouselExampleIndicators-${json_data.post_id}`} role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      )
    }

    return(
      <div className="card bstr-card mt-5" id={json_data.post_id}>
        <div className="card-header d-flex align-items-center card-hd">
          <img src={process.env.PUBLIC_URL + json_data.image } alt="" className="rounded-circle" width="36" height="36"style={{ objectFit: 'cover', width: '36px', height: '36px' }}/>
          <div className="ml-2 d-flex flex-column">
           <p className="card-title mb-0 text-left poster">{json_data.poster}</p>
            <div className="d-flex">
                <small className="text-muted mr-1 small-text">{json_data.studied}</small>
                <small className="text-muted mr-1 small-text">·</small>
                <small className="text-muted mr-1 small-text">{json_data.time_posted}</small>
            </div>      
          </div>

        </div>
        <div className="card-body">
          <p className="card-text text-left description" dangerouslySetInnerHTML={{ __html: desc }}></p>
          <Link to={"/"+json_data.post_tag} onClick={routingTo}><p className="collapse-button">Show More</p></Link>
          <div className="toggle-content">
            {carousel}            
            <a className="project-github-link" href="https://github.com/riyadhossain1998" title="github icons"><img className="icons" alt="icon-github" src={process.env.PUBLIC_URL + "./icons/github.png"}/></a>
          </div>
         
        </div>
        
      </div>
    );
}

export default Project;