'use strict';
import React from 'react';
import{Link} from 'react-router';
import CommentFooter from '../comments/comment-footer.js';
class FenLeiHeader extends React.Component {
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
	render() {
		return( <
			div >
			<
			div className = "header" >
			<
			ul >

			<
			li > < Link to = "/" > < i > < /i></Link > < /li> <
			li > < input type = "text"
			placeholder = "好奇超级品牌日" / > < span > < img src = "images/search.png" / > < /span></li >
			<
			li > < i > < /i></li >
			<
			/ul>

			<
			/div>	 <
			div id = "yin" > 
			<CommentFooter />
			< /div> <
			/div>
		)

	}

}
export default FenLeiHeader;