import React from 'react';
import Header from './Header';
import Footer from './Footer';

import { Router, Route, Link, browserHistory  } from 'react-router'

class Main extends React.Component {

	constructor(props) {
        super(props)
        this.state = {

        };
    }



   render() {
      return (
				<div>
				<div class="fh5co-loader"></div>

					    	<div id="page">
												<Header />
												 {this.props.children}

											 <Footer />
								</div>
					 <div class="gototop js-top">
					 	<a href="#" class="js-gotop"><i class="icon-arrow-up"></i></a>
					 </div>
				</div>

      );
   }
}


export default Main;
