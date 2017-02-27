import React from 'react';
import { Router, Route, Link, browserHistory  } from 'react-router'



class Footer extends React.Component {

  componentWillMount() {
       window.scrollTo(0, 0);
  }




  render() {
    return (
      <footer id="fh5co-footer" role="contentinfo">
    <div className="container">
      <div className="row row-pb-md">
        <div className="col-md-3 fh5co-widget">
          <h4>Vision Craft</h4>
          <p>Visioncraft technologies is the leading 3D architectural visualization company, providing high quality 3d rendering and 3d animation for various sectors including Architecture, Industrial, Medical.</p>
        </div>
        <div className="col-md-3 col-md-push-1">
          <h4>Navigation</h4>
          <ul className="fh5co-footer-links">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About us</Link></li>
            <li><Link to='/service'>Services</Link></li>
            <li><Link to='/work'>Our Works</Link></li>
            <li><Link to='/contact'>Contact us</Link></li>
          </ul>
        </div>
        <div className="col-md-3 col-md-push-1">
          <h4>Sales Office</h4>
          <ul className="fh5co-footer-links">
            <li>FlatNo:202, kamalapuricolony, phase3, srinagar , jubileehills Xroads.</li>
            <li><a href="tel://+91 7997279973">+91 7997279973</a></li>
            <li><a>sales@visioncraft.in</a></li>
          </ul>
        </div>
        <div className="col-md-3 col-md-push-1">
          <h4>Head Office</h4>
          <ul className="fh5co-footer-links">
            <li>Flat No 302,4th floor BIRLA JUNCTION ,Muralinagar , botcha square, Passport Office Building Visakhapatnam-530007</li>
            <li>+91 7997179972</li>
            <li>sales@visioncraft.in</li>
          </ul>
        </div>
      </div>
      <div className="row copyright">
        <div className="col-md-12 text-center">
          <p>
            <small className="block">© 2016 Vision Craft. All Rights Reserved.</small>
            <small className="block">Developed by <a href="http://goutham4u.herokuapp.com/" target="_blank">Goutham</a></small>
          </p>
          <p>
          </p><ul className="fh5co-social-icons">
            <li><a><i className="icon-twitter" /></a></li>
            <li><a><i className="icon-facebook" /></a></li>
            <li><a><i className="icon-linkedin" /></a></li>
            <li><a><i className="icon-dribbble" /></a></li>
          </ul>
          <p />
        </div>
      </div>
    </div>
  </footer>
    );
  }
}


export default Footer;
