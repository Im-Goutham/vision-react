import React from 'react';
import { Router, Route, Link, browserHistory  } from 'react-router'



class About extends React.Component {


  constructor(props)
    {
        super(props)
        this.state = {

        };
    }



  componentWillMount() {
       window.scrollTo(0, 0);

  }


  componentWillReceiveProps()  {


  }



  componentDidMount()  {
      console.log("called from about ..")
        mainFunction();
  }



   render() {


      return (
        <div>
        <aside id="fh5co-hero" className="js-fullheight">
          <div className="flexslider js-fullheight">
            <ul className="slides">
              <li style={{backgroundImage: 'url(images/exterior2.jpg)'}}>
                <div className="overlay-gradient"></div>
                <div className="container">
                  <div className="col-md-10 col-md-offset-1 text-center js-fullheight slider-text">
                    <div className="slider-text-inner desc">
                      <h2 className="heading-section">About Us</h2>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </aside>

        <div id="fh5co-content">
          <div className="choose animate-box" style={{width: '100%'}}>
            <div className="fh5co-heading">
              <h2>About us</h2>
              <p>Visioncraft technologies is the leading 3D architectural visualization company, providing high quality 3d rendering and 3d animation for various sectors including Architecture, Industrial, Medical, Advertising, Builders, Realtors, Government organizations and so on. We provide our customers the actual feel of the output before going for major investments in production. We make you see the unseen, we shape your ideas to reality, and we help you create your own zenith. We are experts in residential &amp; commercial building projects. We work with various architects and provide 3D solutions on various national projects. We believe our experience and ever increasing base of happy clients, builds the trust on our rendering services to bring your designs to life. For more information you can take the help of our support team. </p>
            </div>
            <div className="fh5co-heading">
              <h2>Our team</h2>
              <p>Our team of talented designers with years of experience in 3D walkthroughs offer incomparable quality at best competitive rates. With highly talented team in 3D animation industry, 3D power handles a wide array of creative and technology solutions. Our team has the skills and experience to transform your 2d drawings, cad plans or 3d model files into photo realistic visualizations. "Let us put our creativity and 3D experience at your service".</p>
            </div>
          </div>
        </div>
      </div>
      );
   }
}

export default About;
