'use strict';
import React from 'react';
import{Link} from 'react-router';
class OneGoodNav  extends React.Component{
		componentDidMount(){
	
    var swiper=new Swiper('#min-swiper',{
	autoplay:1000,
	loop:true,
	autoplayDisableOnInteraction:false,
	     pagination: '.swiper-pagination'
		
		})
	}
	
	
     render(){
     	 return(
     	 
     	   <div className="nav">
	  	  	   	<div className="swiper-container" id="min-swiper">
				<div className="swiper-wrapper">
		
				<div className="swiper-slide">
						<img src="./images/1038188890-1_e_2.jpg"/>
					
				</div>
					<div className="swiper-slide">
						<img src="./images/1038188890-3_e_2.jpg"/>
					
				</div>
					<div className="swiper-slide">
						<img src="./images/1038188890-2_e_2.jpg"/>
					
				</div>
	        <div className="swiper-pagination"></div>

				
			
		</div>
	
		</div>
	  	  	   <div className="nav-jie">
	  	  	   <p>茵曼 2017春季新款文艺趣味印花百搭长袖衬衫衬衣女【1871011060】</p>
	  	  	   <h2>179.00</h2>
	  	  	   <ul>
	  	  	   <li>商家发货&售后</li>
	  	  	   <li>支持7日无理由退货</li>
	  	  	   <li>闪电发货</li>
	  	  	   <li>商家发货</li>
	  	  	   <li>支持礼品卡</li>
	  	  	   <li>货到付款</li>
	  	  	   
	  	  	   </ul>
	  	  	   </div>
	  	  	   </div>
     	 
     	 )
     	
     }


}

 export default  OneGoodNav;