//import '../style/roomType.css';
import React,{useState,useEffect} from 'react';

//import { Link } from "react-router-dom";
const RoomType0 =({RoomCard,Classicroom4})=>{
	const [currentId,setCurrentId]=useState(0)
	const next=()=>{
		setCurrentId((currentId)=>Classicroom4.length-1>currentId?currentId+1:0);
	}
	const prev=()=>{
		setCurrentId((currentId)=>currentId>0?currentId-1:Classicroom4.length-1);
	}
	useEffect(()=>{
		setCurrentId(0);
	 	
	 },[]);

	return(			
			<div className="roomCard-grid" >
				
					<div className="roomCard-image">
						<button className="btnleft" onClick={prev}> {"<"} </button>
						{Classicroom4.map((el,id)=>(
							<div className={`slider-slide ${currentId===id?"slider-slide-active":""}`} key={el.key}>
							<img className="roomCard-image" src={el.image}  alt=""/>
							</div>
						))}
						<button className="btnright" onClick={next}> {">"}</button>
					</div>
					
					<div className="roomCard-detail">
					<div className="roomCard-detail-title">{RoomCard[0].roomName}</div>
					<div className="roomCard-detail-price">{RoomCard[0].price}</div>
					</div>
				
			</div>
	
		);
};
export default RoomType0;