'use strict';
import React from 'react';
import{Link} from 'react-router';
import CommentFooter from '../../comments/comment-footer.js';
class OneGoodHeader  extends React.Component{
	componentDidMount() {
		var a = document.getElementById("yin");
		var b = document.getElementsByTagName("li")[2];
		var flag = true;

		b.onclick = function() {

			if(flag) {

				a.style.display = "block";

				flag = false;
			} else if(flag == false) {

				a.style.display = "none";
				flag = true;
			}
		}

	}
	
	render(){
	   return(
	   	<div>
	   	<div className="header">
	   	<ul>
	   <li><Link to="/ListGoods">←</Link></li>
	   <li>商品详情</li>
	      <li><i className="icon iconfont">&#xf0013;</i></li>
	      </ul>
	     
	   	</div>
	   	 <div id="yin">
	      <CommentFooter />
	      </div>
	   </div>
	   )
	}
	
	


}
export default OneGoodHeader;