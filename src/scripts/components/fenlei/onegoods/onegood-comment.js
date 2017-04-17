'use strict';
import React from 'react';
import{Link} from 'react-router';
import OneGoodHeader from './onegood-header.js';
import OneGoodNav from './onegood-nav.js';
import OneGoodCount  from './onegood-count.js';
class OneGoodComment  extends React.Component{
    render(){
    	   return(
    	   	
    	   	<div className="comment">
    	   	   <OneGoodHeader />
	   <OneGoodNav />
	   <OneGoodCount />
    	   	
    	   	</div>
    	   	
    	   	
    	   )
    	
    	 
    }



}
export default OneGoodComment;