'use strict';
import React from 'react';
import{Link} from 'react-router';
class ListNav  extends React.Component{
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
	
	
	render(){
				console.log(this.state.arr);
						let cNodes=this.state.arr.map((comment,index) => {
			return(
				
					<li key={index}><Link to="/oneGood"><img src={comment.image}/>
					<p>{comment.title}</p>
					<i>{comment.price}</i></Link></li>
					

				
			)
			
		})
		
	   return(
	   	
	   	<div className="goodNav">
	   	    <h3>女士服装</h3>
	   	    <ul>
	   	    <li>默认</li>
	   	   <li>销量</li>
	   	   <li>价格</li>
	   	   <li>好评</li>
	   	   <li>最新</li>
	   	   </ul>
	   	          <ul>
	   	      {cNodes}
	   	    </ul>
	   	{this.props.children}
	   	</div>
	   	
	   	
	   )
	}
	


}
export default ListNav;