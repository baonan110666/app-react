'use strict';
import React from 'react';
import CommentHeader from "./comment-header.js";
import CommentCount from "./comment-count.js";
import CommentFooter from "./comment-footer.js";


class CommentBox extends React.Component{

	       
           	componentDidMount(){
           		
           			  //回到顶部代码
	
	

  		
           		
	          var oTab=document.getElementById('m-index');
	            var oTab2=document.getElementById('m-box');
	          var box=document.getElementById("m-box");
                var inp1=oTab.getElementsByTagName('input')[0];
                var inp2=oTab2.getElementsByTagName('i')[0];
                
		       inp1.onfocus=function(){
		      	oTab.style.display="none";
		      	oTab2.style.display="block";
		      	
		      	
		      }
	
	  inp2.onclick=function(){
		      	oTab.style.display="block";
		      	oTab2.style.display="none";
		      	
		      	
		      }
	  

 
	}
	
	  render(){
	  	return(
	  		<div>
	  	
	  		<div className="m-box" id="m-box">
	  		<ul>
	    	   	       
	  	      	<li><i>←</i></li>
	  	         <li><input type="text" placeholder="好奇超级品牌日" className="inp" /><span><img src="images/search.png"/></span></li>
	  	    	<li><i>搜索</i></li>
	  	        </ul>
	  	        <div className="sou">
	  	        <h3>热门搜索</h3>
	  	        <ul>
	  	        <li>八卦医学</li>
	  	        <li>心理罪</li>
	  	        <li>天才少女</li>
	  	        <li>那小子很帅</li>
	  	        <li>武则天</li>
	  	        <li>疯狂赛车</li>
	  	        <li>嘿哥们</li>
	  	        </ul>
	  	        </div>
	  		</div>
	  	     <div className="m-index" id="m-index">
	  	
	  	   
	  	      <CommentHeader />
	  	      <CommentCount data1='../mock/comment.json'/>
	  	      <CommentFooter />
	  	     </div>
	  	</div>
	  	
	  )
	  	
	  }
	
	
	
}


export default CommentBox;