'use strict';
import React from 'react';
import MyloginHeader from './mylogin-header.js';
import MyloginNav from './mylogin-nav.js';
import MyloginDingdan from './mylogin-dingdan.js';
class MyLoginBox extends React.Component{
		  render(){
	  	 return(
	  	 
	  	 	<div className="myloginBox">
	         <MyloginHeader />
	    	   <MyloginNav/>
	    	   <MyloginDingdan/>
	    	   </div>	
	    	
	  	 	
	  	 )
	  	
	  	
	  	
	  }
	
	
	
}
export default MyLoginBox;


