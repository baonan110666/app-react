'use strict';
import React from 'react';
import{Link} from 'react-router';
import ListHeader from './list-header.js';
import ListNav from './list-nav.js';
class ListGoods extends React.Component{
	render(){
		return(
	<div className="listGood">
	
       <ListHeader />
	  <ListNav data1='../mock/goods.json'/ >  	   	   
	    	  
	</div>
	)
	}
}
export default ListGoods;