//import '../style/roomType.css';
import React,{useState,useEffect} from 'react';

//import { Link } from "react-router-dom";
const RoomType3 =({RoomCard,Double1bed})=>{
	const [currentId,setCurrentId]=useState(0)
	const next=()=>{
		setCurrentId((currentId)=>Double1bed.length-1>currentId?currentId+1:0);
	}
	const prev=()=>{
		setCurrentId((currentId)=>currentId>0?currentId-1:Double1bed.length-1);
	}
	useEffect(()=>{
		setCurrentId(0);
	 	
	 },[]);

	return(			
			<div className="roomCard-grid" >
				
					<div className="roomCard-image">
						<button className="btnleft" onClick={prev}> {"<"} </button>
						{Double1bed.map((el,id)=>(
							<div className={`slider-slide ${currentId===id?"slider-slide-active":""}`} key={el.key}>
								<img className="roomCard-image" src={el.image}  alt=""/>
							</div>
							))}
						<button className="btnright" onClick={next}> {">"}</button>
					</div>
					
					<div className="roomCard-detail">
						<div className="roomCard-detail-title">{RoomCard[3].roomName}</div>
					<div className="roomCard-detail-price">{RoomCard[3].price}</div>
					</div>
				
			</div>
	
		);
};
export default RoomType3;