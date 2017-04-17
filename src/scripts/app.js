'use strict'
import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/app.scss';

import{Router,Route,hashHistory,IndexRoute} from'react-router';
import CommentBox from './components/comments/comment-box.js';
import myLoginBox from './components/mylogin/mylogin-box.js';
import fenleiBox from './components/fenlei/fenlei-box.js';
import shopcarBox from './components/comments/shopcar-box.js';
import loadsBox from './components/comments/loads-box.js';
import RightBoxMei from './components/fenlei/fenlei-right.js';
import RightBoxHu from './components/fenlei/fenlei-rightHu.js';
import RightBoxDong from './components/fenlei/fenlei-rightDong.js';
import MyLoginDeng from './components/mylogin/mylogin-deng.js';
import ListGoods from './components/fenlei/listgood/list-goods.js';
import OneGood from './components/fenlei/onegoods/onegood-box.js';

var app=document.getElementById('app');

ReactDOM.render((
	<Router history={hashHistory}>
		<Route path="/" component={CommentBox} >
		</Route>
		
		<Route path="/myLogin" component={myLoginBox}>
	
		</Route>
		   <Route path="deng" component={MyLoginDeng}>
		</Route>
	
		
		<Route path="/fenlei" component={fenleiBox} >
		    <IndexRoute component={RightBoxMei}></IndexRoute>
		    <Route path="mei" component={RightBoxMei}></Route>
		     <Route path="hu" component={RightBoxHu}></Route>
		      <Route path="dong" component={RightBoxDong}></Route>
		</Route>
		<Route path="/ListGoods" component={ListGoods}></Route>
			<Route path="/oneGood" component={OneGood}></Route>
		
		<Route path="/shopcar" component={shopcarBox}>
		</Route>
		
		<Route path="/loads" component={loadsBox}>
		</Route>
	</Router>
	
	
),app);
	  


if(module.hot){
	
	module.hot.accept();
	
}
