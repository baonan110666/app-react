'use strict';
import React from 'react';
import{Link} from 'react-router';
class MyLoginNav extends React.Component{
	  render(){
	  	 return(
	  	 	
	  	 	<div className="nav">
	    	   <p><Link to="/deng"><span>登录 /</span></Link><span>注册</span></p>
	    	   	  <img src="./images/defhead.png"/> 
	    	   	  {this.props.children}
	    	   </div>
	    	   
	    	   	
	  	 	
	  	 	
	  	 )
	  	
	  	
	  	
	  }
	
	
	
}
export default  MyLoginNav ;