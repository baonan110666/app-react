'use strict';
import React from 'react';
import{Link} from 'react-router';
var FenLeiLeft=React.createClass({
	   	componentDidMount(){
	   	            var oTab=document.getElementById('u');
                var aLi=oTab.getElementsByTagName('li');
             
	   		    for(var i=0;i<aLi.length;i++){
                    aLi[i].index=i;
                    aLi[i].onclick=function(){
                        for(var j=0;j<aLi.length;j++){
                            aLi[j].className='';//取消菜单样式
                           
                        }
                        aLi[this.index].className='active';
                       
                    }
                }
	   			
	   		
	   		
	   		
	   	},
	    render(){
	    	   return(
	    	  
	    	   	<div className="fen-left">
	    	   	<ul id="u">
	    	   	  <li className="active"><Link to="/fenlei/mei">女装</Link></li>
	    	   	  <li><Link to="/fenlei/hu">男装</Link></li> 
	    	   	  <li><Link to="/fenlei/dong">美妆护肤</Link></li> 
	    	   	  <li>女装</li> 
	    	   	  <li>男装</li> 
	    	   	  <li>图书</li> 
	    	   	  <li>电子书</li> 
	    	   	  <li>运动户外</li>
	    	   	  <li>男女鞋子</li>
	    	   	  <li>箱包皮具</li> 
	    	   	  <li>内衣配饰</li> 
	    	   	  <li>腕表眼镜</li> 
	    	   	  <li>童书</li> 
	    	   	  <li>创意文具</li> 
	    	   	  <li>网络文学</li> 
	    	   	  <li>美妆护肤</li> 
	    	   	  
	  	      
	  	        </ul>
	  	        </div>
	    	   	 	 
	    	  
	    	   	
	    	   )
	    	
	    	
	    	
	    }


})
  export default FenLeiLeft;