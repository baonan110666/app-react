'use strict';
import React from 'react';

import CommentNav from "./comment-nav.js";
import CommentGood from "./comment-goods.js";
class CommentCount extends React.Component{
	
	
	
 
     constructor(props){
     	super(props);
     	this.state={arr:[]};
     fetch(this.props.data1).then((response)=>{
				return response.json();
				
				
				
			}).then((data)=>{
					console.log(data);
				this.setState({arr:data});
				
			
				
			}).catch((e)=>{
				
				
				console.log("Oops,error");
			});
     	
     	
     }
     
     	    	componentDidMount(){
window.onload = function(){
  var oTop = document.getElementById("to_top");
  var boxTop=document.getElementById("comment");
 
  //console.log(screenh);
 oTop.onclick = function(){
    boxTop.scrollTop=0+"px";
   
  }
}  
           		
      }  
     
     
	 render(){
	 	return(
	<div className="comment" id="comment">

    	<div className="backTop" id="to_top">
	  	     
	  ↑ 返回顶部
	  		</div>
   <CommentNav />
    <CommentGood data2={this.state.arr}/>

 
</div>

)
}
}
export default CommentCount;