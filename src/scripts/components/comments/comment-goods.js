'use strict';
import React from 'react';
import{Link} from 'react-router';
class CommentGood extends React.Component{
		
	componentDidMount(){
			var days=this.refs.days;
			var hours=this.refs.hours;
			var seconds=this.refs.seconds;
			var minuts=this.refs.minuts;
		var interval = 1000; 
function ShowCountDown(year,month,day) 
{ 
var now = new Date(); 
var endDate = new Date(year, month-1, day+2); 
var leftTime=endDate.getTime()-now.getTime(); 
var leftsecond = parseInt(leftTime/1000); 

var day1=Math.floor(leftsecond/(60*60*24)); 
var hour=Math.floor((leftsecond-day1*24*60*60)/3600); 
var minute=Math.floor((leftsecond-day1*24*60*60-hour*3600)/60); 
var second=Math.floor(leftsecond-day1*24*60*60-hour*3600-minute*60); 
 
days.innerHTML =day1+"天";
 hours.innerHTML=hour+"小时"  
  seconds.innerHTML=minute+"分"
    minuts.innerHTML=second+"秒";
}  
window.setInterval(function(){ShowCountDown(2017,3,30);}, interval); 

		
		

		

	}

	
	
	render(){
			console.log(this.props.data2);
				let cNodes=this.props.data2.map((comment,index) => {
			return(
				
					<li key={index}><Link to="/fenlei" key={index}><img src={comment.img}/></Link></li>
					

				
			)
			
		})
		   console.log(cNodes)
		return(
	<div className="good">
	<ul>
	 {cNodes}
	
	          <div><img src="/images/xin-Touch-oe990werer93.jpg"/></div>
	          <div className="time"><h2>秒杀</h2><span ref="days"></span><span ref="hours"></span><span ref="seconds"></span><span ref="minuts"></span></div>
	  <div className="dijia">
	  <ul>
	  <li><img src="/images/136690027692160_y.jpg"/><i>￥249.00</i></li>
	  	  <li><img src="/images/183600024023448_y.jpg"/><i>￥149.00</i></li>
	  	  	  <li><img src="/images/136690027692160_y.jpg"/><i>￥49.00</i></li>
	  </ul>
	  </div>
	      </ul>
	
	   </div>
	
	
	)
	}
}
export default CommentGood;