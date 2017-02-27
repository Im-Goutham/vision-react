import React from 'react';
import { Router, Route, Link, browserHistory  } from 'react-router'


class Header extends React.Component {

componentWillMount() {

     window.scrollTo(0, 0);
     console.log("Will mount  from header");


}


  constructor(props)
    {
        super(props)
        this.state = {

        };
    }


    componentDidMount()  {

            console.log("DiD mount  from header");
            //  mainFunction();
    }


    componentWillReceiveProps()  {
       window.scrollTo(0, 0);
            console.log("Will receive props from header");
            var url = window.location.href ;
            var res = url.split("/");
            var res1  = res[4];
            console.log("res1 is "+res1)
            var res2 = res1.split("?");
            var name = res2[0];
            console.log("name is in header-- "+name);
              mainFunction();

    }





   render() {


      return (

        <nav className="fh5co-nav" role="navigation">
    <div className="top-menu">
      <div className="container">
        <div className="row">
          <div className="col-xs-2">
            <div id>
              <Link to='/'><img src="images/logo.png" alt="Vision Craft Technogies" style={{height: 45}} /></Link>
            </div>
          </div>
          <div className="col-xs-10 text-right menu-1">
            <ul>
              <li className="active"><Link to='/'>Home</Link></li>
              <li><Link to='/about'>About Us</Link></li>
              <li className="has-dropdown">
                 <Link to='/service/3d'>Services</Link>
                <ul className="dropdown">
                  <li><Link to='/service/3d'>3D walkthrough</Link></li>
                  <li><Link to='/service/exterior'>Exterior rendering</Link></li>
                  <li><Link to='/service/interior'>Interior rendering</Link></li>
                  <li><Link to='/service/product'>Product modeling</Link></li>
                  <li><Link to='/service/character'>Character modeling</Link></li>
                </ul>
              </li>
              <li className="has-dropdown">
                 <Link to='/work'>Our Works</Link>
              </li>
              <li><Link to='/contact'>Contact</Link></li>
              <li className="btn-cta"><a><span>+917997179972</span></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>
      );
   }
}


export default Header;
