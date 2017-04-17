'use strict';
import React from 'react';
import{Link} from 'react-router';
class ListHeader  extends React.Component{
	render(){
		return(
	<div className="listHeader">
	
   	          <ul>
	    	   	      
	  	      	<li><Link to="/fenlei">←</Link></li>
	  	         <li><input type="text" placeholder = "T恤 共433个结果" /></li>
	  	    	<li><i>筛选</i></li>
	  	        </ul>
	    	   	   
	    	    <p><span>商品</span><span>店铺</span></p>
	</div>
	)
	}
}
export default ListHeader;