'use strict';
import React from 'react';

class CommentNav extends React.Component{
	
	
	componentDidMount(){
	
    var swiper=new Swiper('#min-swiper',{
	autoplay:1000,
	loop:true,
	autoplayDisableOnInteraction:false,
	     pagination: '.swiper-pagination'
		
		})
	}


	 render () {
	  	
       return(
	  	  	   <div className="nav">
	  	  	   	<div className="swiper-container" id="min-swiper">
				<div className="swiper-wrapper">
		
				<div className="swiper-slide">
						<img src="./images/53840022861932_y.jpg"/>
					
				</div>
					<div className="swiper-slide">
						<img src="./images/m640x284_wzh_20170328.jpg" />
					
				</div>
					<div className="swiper-slide">
						<img src="./images/Touch.jpg"/>
					
				</div>
	        <div className="swiper-pagination"></div>

				
			
		</div>
		<img src="/images/hdufdufb3889-640-284.jpg"/>
		</div>
	  	  	   
	  	  	   
	  	  	   
	  	  	   </div>
	  	  	   

	  	  	
	  	  )
	  	

	  	
	  	
	  }
	  
	  
	  
	         

	
	

}
export default CommentNav;