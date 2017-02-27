import React from 'react';
import { Router, Route, Link, browserHistory  } from 'react-router'



class Service extends React.Component {

  componentWillMount() {
       window.scrollTo(0, 0);
      var name = this.props.params.name;
      this.setState({name: name});
  }



  constructor(props)
    {
        super(props)
        this.state = {
              "name": ""
        };
    }


    componentWillReceiveProps()  {
           var url = window.location.href ;
           var res = url.split("/");
           var res1  = res[5];
           console.log("res1 is "+res1)
           var res2 = res1.split("?");
           var name = res2[0];
           console.log("name is -- "+name);
           this.setState({name: name},()=>{
              console.log("this.state.name is "+this.state.name);
              window.scrollTo(0, 800);
           });
    }

    componentDidMount()  {
        console.log("called from service ..")
          mainFunction();
    }



   render() {


      return (
        <div>

      <aside id="fh5co-hero" className="js-fullheight">
        <div className="flexslider js-fullheight">
          <ul className="slides">
            <li style={{backgroundImage: 'url(images/service_wallpaper.jpg)'}}>
              <div className="overlay-gradient" ></div>
              <div className="container">
                <div className="col-md-10 col-md-offset-1 text-center js-fullheight slider-text">
                  <div className="slider-text-inner desc">
                    <h2 className="heading-section">Our Services</h2>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </aside>


  <div id="fh5co-content">
{
    (this.state.name == "3d")?(

        <div className="choose animate-box" style={{width: '60%'}}>
          <div className="fh5co-heading">
            <h2>3D walkthrough</h2>
            <p>We focus on creating smartly crafted AVI, MPEG or MOVIE files for 3d architectural walkthroughs so that experts can use them in their presentations and convey the project flow to the project development group without any difficulty. Engage the consumer from the comfort of his or her own home by placing 3d architectural animations on websites, social media sites and mobile phones, or deliver professional CD or DVD presentations to clients straight from the sales office.</p>
          </div>
        </div>
    ):(
          (this.state.name == "exterior")?(

              <div className="choose animate-box" style={{width: '60%'}}>
                <div className="fh5co-heading">
                  <h2>Exterior rendering</h2>
                  <p>VISIONCRAFT  3D exterior rendering design will visualize and built your project prototype on online portfolios and paper presentations even before the actual construction commences. The beauty of the projects is enhanced by precise lighting shading and texturing of building in photo-realistic soundings. This will help you to present and close the deal better by presenting before the client a 3D view of the property they are going to buy or invest. Our Exterior Designer Artist is expert in all type of exterior Design like Hotels, Resort, Buildings and residential Properties.</p>
                </div>
              </div>

          ):(
                (this.state.name == "interior")?(

                    <div className="choose animate-box" style={{width: '60%'}}>
                      <div className="fh5co-heading">
                        <h2>Interior rendering</h2>
                        <p>V-RAY RENDERS ARE TO BE DONE HERE.</p>
                      </div>
                    </div>

                ):(
                     (this.state.name == "product")?(

                         <div className="choose animate-box" style={{width: '60%'}}>
                           <div className="fh5co-heading">
                             <h2>Product modeling</h2>
                             <p>WE WILL DESIGN PRODUCTS IN 3D MODEL</p>
                           </div>
                         </div>

                     ):(
                          (this.state.name == "character")?(

                              <div className="choose animate-box" style={{width: '60%'}}>
                                <div className="fh5co-heading">
                                  <h2>Character modeling</h2>
                                  <p>WE WILL DESIGN 3D ANIMATED CHARACTERS.</p>
                                </div>
                              </div>


                          ):(
                               null
                          )
                     )
                )
          )
    )
}


 <div className="choose animate-box" style={{width: '40%'}}>
    <h3>Quick enquiry</h3>
    <form action="#">
      <div className="row form-group">
        <div className="col-md-12">
          {/* <label for="fname">First Name</label> */}
          <input type="text" id="fname" className="form-control" placeholder="Name" />
        </div>
      </div>
      <div className="row form-group">
        <div className="col-md-12">
          {/* <label for="email">Email</label> */}
          <input type="text" id="email" className="form-control" placeholder="Email address" />
        </div>
      </div>
      <div className="row form-group">
        <div className="col-md-12">
          {/* <label for="subject">Subject</label> */}
          <input type="text" id="mobile" className="form-control" placeholder="Mobile number" />
        </div>
      </div>
      <div className="row form-group">
        <div className="col-md-12">
          {/* <label for="message">Message</label> */}
          <textarea name="message" id="message" cols={30} rows={3} className="form-control" placeholder="Message" defaultValue={""} />
        </div>
      </div>
      <div className="form-group">
        <input type="submit" defaultValue="Send Message" className="btn btn-primary" />
      </div>
    </form>
  </div>
</div>

      </div>
      );
   }
}

export default Service;
