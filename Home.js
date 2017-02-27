import React from 'react';
import { Router, Route, Link, browserHistory  } from 'react-router'



class Home extends React.Component {

  componentWillMount() {
       window.scrollTo(0, 0);

  }


  constructor(props)
    {
        super(props)
        this.state = {

        };
    }

    componentWillReceiveProps()  {

             mainFunction();
    }


    componentDidMount()  {
        console.log("called from home ..")
          mainFunction();
    }



   render() {


      return (
        <div>
              <div>
         <aside id="fh5co-hero" className="js-fullheight">
           <div className="flexslider js-fullheight">
             <ul className="slides">
               <li style={{backgroundImage: 'url(images/interior.jpg)'}}>
                 <div className="overlay-gradient" ></div>
                 <div className="container">
                   <div className="row">
                     <div className="col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 col-xs-8 col-xs-offset-2 text-center js-fullheight slider-text">
                       <div className="slider-text-inner text-center">
                         <h1>Interior</h1>
                       </div>
                     </div>
                   </div>
                 </div>
               </li>
               <li style={{backgroundImage: 'url(images/3dwalkthrough.jpg)'}}>
                 <div className="overlay-gradient" ></div>
                 <div className="container">
                   <div className="row">
                     <div className="col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 col-xs-8 col-xs-offset-2 text-center js-fullheight slider-text">
                       <div className="slider-text-inner text-center">
                         <h1>3D Walkthrough</h1>
                       </div>
                     </div>
                   </div>
                 </div>
               </li>
               <li style={{backgroundImage: 'url(images/exterior_rendering.jpg)'}}>
                 <div className="overlay-gradient" ></div>
                 <div className="container">
                   <div className="row">
                     <div className="col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 col-xs-8 col-xs-offset-2 text-center js-fullheight slider-text">
                       <div className="slider-text-inner text-center">
                         <h1>Exterior Rendering</h1>
                       </div>
                     </div>
                   </div>
                 </div>
               </li>
               <li style={{backgroundImage: 'url(images/interior_rendering.jpg)'}}>
                 <div className="overlay-gradient"></div>
                 <div className="container">
                   <div className="row">
                     <div className="col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 col-xs-8 col-xs-offset-2 text-center js-fullheight slider-text">
                       <div className="slider-text-inner text-center">
                         <h1>Interior Rendering</h1>
                       </div>
                     </div>
                   </div>
                 </div>
               </li>
             </ul>
           </div>
         </aside>


         <div id="fh5co-content">
           <div className="video fh5co-video" style={{backgroundImage: 'url(images/animation_series.jpg)'}}>
             <a href="https://vimeo.com/channels/staffpicks/93951774" className="popup-vimeo"><i className="icon-video2" /></a>
             <div className="overlay" ></div>
           </div>
           <div className="choose animate-box">
             <div className="fh5co-heading">
               <h2>WHY VISION CRAFT?</h2>
               <p> Our team has the skills and experience to transform your 2d drawings, cad plans or 3d model files into photo realistic visualizations. "Let us put our creativity and 3D experience at your service".</p>
               <p>
                 For more information you can take the help of our support team
               </p>
             </div>
           </div>
         </div>
         <div id="fh5co-project" style={{paddingBottom: 40}}>
           <div className="container">
             <div className="row animate-box">
               <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                 <h2>Our Services</h2>
                 <p>To be a dynamic, vibrant and value-based consulting firm with trustworthy customers</p>
               </div>
             </div>
           </div>
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
               <div className="col-md-12 text-center animate-box" style={{marginTop: 40}}>
                 <p><a className="btn btn-primary btn-lg btn-learn" href="#">View More</a></p>
               </div>
             </div>
           </div>
         </div>
         <div id="fh5co-practice" className="fh5co-bg-section">
           <div className="container">
             <div className="row animate-box">
               <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                 <h2>Our happy Clients</h2>
               </div>
             </div>
             <div className="row">
               <div className="col-md-4 text-center animate-box">
                 <div className="services">
                   <span>
                     <img className="img-circle" src="images/shakthi.png" alt="user" style={{height: 80, width: 100}} />
                   </span>
                   <div className="desc">
                     <h3><a href="#">Sai Shakthi Infrastructure</a></h3>
                     <p>They gave us excellent 3D walkthrough</p>
                   </div>
                 </div>
               </div>
               <div className="col-md-4 text-center animate-box">
                 <div className="services">
                   <span>
                     <img className="img-circle" src="images/prime.png" alt="user" style={{height: 80, width: 100}} />
                   </span>
                   <div className="desc">
                     <h3><a href="#">Prime Galaxy(Amaravathi)</a></h3>
                     <p>We are totally happy with there service.</p>
                   </div>
                 </div>
               </div>
               <div className="col-md-4 text-center animate-box">
                 <div className="services">
                   <span className>
                     <img className="img-circle" src="images/mrkanchi.png" alt="user" style={{height: 80, width: 100}} />
                   </span>
                   <div className="desc">
                     <h3><a href="#">Mr Kanchi(Hyderabad)</a></h3>
                     <p>They have the best team.Very smart at work.</p>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
         </div>

      );
   }
}

export default Home;
