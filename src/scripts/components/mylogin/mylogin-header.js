'use strict';
import React from 'react';
import{Link} from 'react-router';
class MyLoginHeader extends React.Component{
	  render(){
	  	 return(
	  	 	
	  	 	<div className="header">
	    	   	<ul>
	    	   	       
	  	      	<li><Link to="/"><i>←</i></Link></li>
	  	         <li><i>我的当当</i></li>
	  	    	<li><i></i></li>
	  	        </ul>
	    	   	   
	    	   </div>	
	    	   	
	  	 	
	  	 	
	  	 )
	  	
	  	
	  	
	  }
	
	
	
}
export default MyLoginHeader;