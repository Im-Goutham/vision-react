import React from 'react';
import { Router, Route, Link, browserHistory  } from 'react-router'



class Work extends React.Component {

  componentWillMount() {
       window.scrollTo(0, 0);

  }



  constructor(props)
    {
        super(props)
        this.state = {

        };
    }


    componentDidMount()  {
      console.log("called from work ..")
          mainFunction();
    }


   render() {


      return (
        <div>
        <div>
          <aside id="fh5co-hero" className="js-fullheight">
            <div className="flexslider js-fullheight">
              <ul className="slides">
                <li style={{backgroundImage: 'url(images/work_wallpaper.jpg)'}}>
                  <div className="overlay-gradient"></div>
                  <div className="container">
                    <div className="col-md-10 col-md-offset-1 text-center js-fullheight slider-text">
                      <div className="slider-text-inner desc">
                        <h2 className="heading-section">Our Work</h2>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </aside>
          <div id="fh5co-project" style={{paddingBottom: 40}}>
            <div className="container">
              <div className="row">
                <div className="col-md-4 col-sm-6 text-center fh5co-project animate-box" data-animate-effect="fadeIn">
                  <a href="#"><img src="images/character_modeling.png" alt="Character modeling" className="img-responsive" />
                    <h3>Character modeling</h3>
                    <span>3D Animated characters done here</span>
                  </a>
                </div>
                <div className="col-md-4 col-sm-6 text-center fh5co-project animate-box" data-animate-effect="fadeIn">
                  <a href="#"><img src="images/product_modeling.jpg" alt="Product modeling" className="img-responsive" />
                    <h3>Product modeling</h3>
                    <span>We will design products in 3D model</span>
                  </a>
                </div>
                <div className="col-md-4 col-sm-6 text-center fh5co-project animate-box" data-animate-effect="fadeIn">
                  <a href="#"><img src="images/interior_rendering2.jpg" alt="Interior rendering" className="img-responsive" />
                    <h3>Interior rendering</h3>
                    <span>V-ray renders are to be done here</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      );
   }
}

export default Work;
