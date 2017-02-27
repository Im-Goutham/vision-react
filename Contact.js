import React from 'react';
import { Router, Route, Link, browserHistory  } from 'react-router'



class Contact extends React.Component {

  componentWillMount() {
       window.scrollTo(0, 0);

  }


  constructor(props)
    {
        super(props)
        this.state = {
             contactData: {},
             contactDone: false

        };
    }


    componentDidMount()  {
        console.log("called from contact ..")
          mainFunction();
    }


    contactForm(e){
      e.preventDefault();

    console.log("function called..");
      var self = this;
          var contactData = {
              firstName: document.getElementById("firstName").value,
              lastName: document.getElementById("lastName").value,
              email: document.getElementById("email").value,
              message: document.getElementById("message").value
          };

          console.log("contactData: "+JSON.stringify(contactData));
          $.ajax
          ({
              type: "POST",
              url: 'contact_mail',
              contentType: "application/json",
              data: JSON.stringify(contactData) ,
              dataType : 'json',
              success: function(contactData){
                  console.log("done--"+contactData);
                  self.setState({contactData: contactData});
                  self.setState({contactDone: true});
                  console.log("contactdata is --"+self.state.contactData);
                  console.log("contactDone is --"+self.state.contactDone);



                  //alert("verified");

              },
              error:function(err)  {
                  console.log("error is..."+JSON.stringify(err));
              }
          });
      }



   render() {


      return (
        <div className="row">
        <div>
     <aside id="fh5co-hero" className="js-fullheight">
       <div className="flexslider js-fullheight">
         <ul className="slides">
           <li style={{backgroundImage: 'url(images/contact_wallpaper.jpg)'}}>
             <div className="overlay-gradient"> </div>
             <div className="container">
               <div className="col-md-10 col-md-offset-1 text-center js-fullheight slider-text">
                 <div className="slider-text-inner desc">
                   <h2 className="heading-section">Contact Us</h2>
                   <p className="fh5co-lead" />
                 </div>
               </div>
             </div>
           </li>
         </ul>
       </div>
     </aside>
     <div id="fh5co-contact">
       <div className="container-fluid">
         <div className="row">
           <div className="col-md-5 col-md-push-1 animate-box" style={{padding: '0px 40px'}}>
             <div className="fh5co-contact-info">
               <h3>Contact Information</h3>
               <h3 style={{fontSize: 15}}>Head office</h3>
               <ul>
                 <li className="address">FlatNo:202, kamalapuricolony<br /> phase3 ,srinagar <br /> jubileehills Xroads.</li>
                 <li className="phone"><a href="tel://+91 7997279973"> +91 7997279973</a></li>
                 <li className="email"><a href="mailto:sales@visioncraft.in">sales@visioncraft.in</a></li>
                 <li className="url"><a href="visioncraft.in">visioncraft.in</a></li>
               </ul>
               <h3 style={{fontSize: 15}}>Sales office</h3>
               <ul>
                 <li className="address">Flat No 302,4th floor <br />BIRLA JUNCTION, Muralinagar <br /> botcha square <br />Passport Office Building <br />Visakhapatnam-530007</li>
                 <li className="phone"><a href="tel://1234567920">+91 7997179972</a></li>
                 <li className="email"><a href="mailto:sales@visioncraft.in">sales@visioncraft.in</a></li>
                 <li className="url"><a href="visioncraft.in">visioncraft.in</a></li>
               </ul>
             </div>
           </div>


           {
               (this.state.contactDone)?(
                 <div className="col-md-6 animate-box" style="padding-top: 88px;padding-left: 45px;">
                   <h3>Message sent. Will reach you soon.</h3>
                 </div>
               ):(
                 <div className="col-md-6 animate-box" style={{padding: '0px 40px'}}>
                   <h3>Send A Message</h3>
                   <form onSubmit={this.contactForm.bind(this)}>
                     <div className="row form-group">
                       <div className="col-md-6">
                         {/* <label for="fname">First Name</label> */}
                         <input type="text" id="fname" className="form-control" id="firstName" placeholder="Your firstname" />
                       </div>
                       <div className="col-md-6">
                         {/* <label for="lname">Last Name</label> */}
                         <input type="text" id="lname" className="form-control" id="lastName" placeholder="Your lastname" />
                       </div>
                     </div>
                     <div className="row form-group">
                       <div className="col-md-12">
                         {/* <label for="email">Email</label> */}
                         <input type="text" id="email" className="form-control" id="email" placeholder="Your email address" />
                       </div>
                     </div>
                     <div className="row form-group">
                       <div className="col-md-12">
                         {/* <label for="subject">Subject</label> */}
                         <input type="text" id="subject" className="form-control" placeholder="Your subject of this message" />
                       </div>
                     </div>
                     <div className="row form-group">
                       <div className="col-md-12">
                         {/* <label for="message">Message</label> */}
                         <textarea name="message" id="message" cols={30} rows={10} id="message" className="form-control" placeholder="Say something about us" defaultValue={""} />
                       </div>
                     </div>
                     <div className="form-group">
                       <input type="submit" defaultValue="Send Message" className="btn btn-primary" onSubmit={this.contactForm.bind(this)}/>
                     </div>
                   </form>
                 </div>
               )
           }

         </div>
       </div>
     </div>
     <div id="map" className="fh5co-map" ></div>
   </div>
       </div>

      );
   }
}


export default Contact;
