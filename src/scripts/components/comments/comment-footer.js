'use strict';
import React from 'react';
import{Link} from 'react-router';
var CommentFooter=React.createClass({
	render(){
		return(
		<div className="footer"> 
		   <div >
		   <ul>
		   <li><Link to="/"><i className="icon iconfont">&#xe62a;</i><span>首页</span></Link></li>
		      <li><Link to="/fenlei"><i className="icon iconfont">&#xe62a;</i><span>分类</span></Link></li>
		         <li><Link to="/shopcar"><i className="icon iconfont">&#xe62a;</i><span>购物车</span></Link></li>
		            <li><Link to="/myLogin"><i className="icon iconfont">&#xe62a;</i><span>我的当当</span></Link></li>
		            <li><Link to="/loads"><i className="icon iconfont">&#xe62a;</i><span>我的下载</span></Link></li>
		   
		   </ul>
		   
		   </div>
		 {this.props.children}
		 </div>
		)
		
		
	}

})

   export default CommentFooter;