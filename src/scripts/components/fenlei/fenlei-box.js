'use strict';
import React from 'react';

import FenLeiHeader from './fenlei-header.js';
import FenLeiLeft from './fenlei-left.js';

class fenleiBox extends React.Component{
	  render(){
	  	 return(
	  	 	
	  	 	<div className="m-fenlei">
	  	
	  	 	<FenLeiHeader />
	  	  <FenLeiLeft />
	  	 	
	  	 {this.props.children}
	  	 	
	  	 	</div>
	  	 	
	  	 	
	  	 	
	  	 	
	  	 )
	  	
	  	
	  	
	  }
	
	
	
}
export default fenleiBox;