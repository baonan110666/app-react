'use strict';
import React from 'react';
import{Link} from 'react-router';
import OneGoodComment  from './onegood-comment.js';
import OneGoodFooter  from './onegood-footer.js';
class OneGood extends React.Component{
	render(){
	   return(
	   	<div className="oneGoodsBox">
	      <OneGoodComment />
	      <OneGoodFooter />
	   	</div>
	   
	   )
	}
	
	


}
export default OneGood;