import '../style/item2.css';
import React,{useState,useEffect} from 'react';

const Item2=({Sliderimgs})=>{
	
	const [currentId,setCurrentId]=useState(0)
	let delaytime=5000;//自動撥放延遲時間
	let autoplay=true;
	let autoInterval;
	const next=()=>{
		setCurrentId((currentId)=>Sliderimgs.length-1>currentId?currentId+1:0);
	}
	const prev=()=>{
		setCurrentId((currentId)=>currentId>0?currentId-1:Sliderimgs.length-1);
	}
	const jumpto=(id)=>{
		setCurrentId(id);
	}
	
	useEffect(()=>{
		setCurrentId(0);
	 	
	 },[]);
	useEffect(()=>{//當currentId變動時執行
		const auto=()=>{
			autoInterval=setInterval(next,delaytime);
		}
		if(autoplay){
			auto()
		}

	 	return ()=>clearInterval(autoInterval);//清除上一個effect
	 },[currentId]);

	//useInterval(increment,3000);
/*直接切換src 會切到圖片才開始載入*/
	return(
		<div className="test2">
			<button onClick={prev}>prev</button>
			<div className="slider" >
				
				{Sliderimgs.map((el,id)=>(
					<div className={`slider-slide ${currentId===id?"slider-slide-active":""}`} key={el.key}>
						<img className="slider-imgs" src={el.image} alt='imgs'/>
					</div>
					))}
				
			</div>
			<div className="slider-dots">
					{Sliderimgs.map((el,id)=>(
						<div onClick={jumpto.bind(id)} className={`slider-dot ${currentId===id?"slider-dot-active":""}`}key={el.key}>
						</div>		
					))}
				</div>
			<button onClick={next}>next</button>
		</div>
		);
};
export default Item2;