import './Stylesheets/NavBar.css'

function NavBar() {
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                            <span className="navbar-toggler-icon"></span>
                        </button> 
                        
                        
                        
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <div className="col-md-3">
                            <a className="navbar-brand" href="#">Riyad Hossain</a>
                            </div>
                            <div className="col-md-3">
                                <a className="nav-link" href="#">Quora Theme <span className="sr-only">(current)</span></a>
                            </div>
                            <div className="col-md-3">
                                <a className="nav-link" href="#">Spotify Theme</a>
                            </div>
                            <div className="col-md-3">
                            <a class="mr-4 "href="https://github.com/riyadhossain1998" title="github icons"><img class="icons" src={process.env.PUBLIC_URL + "./icons/github.png"}/></a>
                            <a href="https://linkedin.com/in/riyad-hossain-30773914b" title="linkedin icons"><img class="icons" src={process.env.PUBLIC_URL + "./icons/linkedin.png"}/></a>

                                    
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default NavBar;