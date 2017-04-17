'use strict';
import React from 'react';
import{Link} from 'react-router';
class RightBox extends React.Component{
	  render(){
	  	 return(
	  	 	
	  	 	<div className="fen1">
	  	<div className="fenNav"><img src="./images/m640x284_wzh_20170328.jpg" /></div>
	  	<div className="pin">
	  	 <h3>热门品牌</h3>
	  	<ul>
	  	
	  	 <li><img src="./images/4890024777131_1_o.jpg"/><span>爱曼</span></li>
	  	  <li><img src="./images/4890024777131_1_o.jpg"/><span>爱曼</span></li>
	  	   <li><img src="./images/4890024777131_1_o.jpg"/><span>爱曼</span></li> 
	  	  
	  	</ul>
	  	</div>
	  	<div className="shang">
	  	  <h3>女装</h3>
	  	  <ul>
	  	  <li><Link to="/ListGoods"><img src="./images/7-zzs.png"/></Link></li>
	  	   <li><img src="./images/5-cs.png"/></li>
	  	    <li><img src="./images/1-xinpin602.png"/></li>
	  	     <li><img src="./images/7-niuzai602.png"/></li>
	  	      <li><img src="./images/12-xiuxian602.png"/></li>
	  	       <li><img src="./images/7-zzs.png"/></li>
	  	         <li><img src="./images/7-zzs.png"/></li>
	  	   <li><img src="./images/5-cs.png"/></li>
	  	    <li><img src="./images/1-xinpin602.png"/></li>
	  	     <li><img src="./images/7-niuzai602.png"/></li>
	  	      <li><img src="./images/12-xiuxian602.png"/></li>
	  	       <li><img src="./images/7-zzs.png"/></li>
	  	         <li><img src="./images/7-zzs.png"/></li>
	  	   <li><img src="./images/5-cs.png"/></li>
	  	    <li><img src="./images/1-xinpin602.png"/></li>
	  	     <li><img src="./images/7-niuzai602.png"/></li>
	  	      <li><img src="./images/12-xiuxian602.png"/></li>
	  	       <li><img src="./images/7-zzs.png"/></li>
	  	         <li><img src="./images/7-zzs.png"/></li>
	  	   <li><img src="./images/5-cs.png"/></li>
	  	    <li><img src="./images/1-xinpin602.png"/></li>
	  	     <li><img src="./images/7-niuzai602.png"/></li>
	  	      <li><img src="./images/12-xiuxian602.png"/></li>
	  	       <li><img src="./images/7-zzs.png"/></li>
	  	   </ul>
	  	
	  	</div>
	  	{this.props.children}
	  	 	</div>
	  	
	  	 	
	  	 	
	  	 	
	  	 )
	  	
	  	
	  	
	  }
	
	
	
}
export default RightBox;