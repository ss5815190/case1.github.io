import './nav.css';
import { Link } from "react-router-dom";
import React,{useState} from 'react';
const Nav=()=>{

	const [NavSwitch,setNavSwitch]=useState(0)
	const displayNav=()=>{
		NavSwitch===0?setNavSwitch(NavSwitch+1):setNavSwitch(NavSwitch-1)
		console.log(NavSwitch);
		
	}

	return(
		<div className="top">
			<div className="nav">
				<div className="hotelnumber">
					<p>聖亞哥商旅 訂房專線:07-2862933</p>
				</div>
				
				<div className="pages">
					{/**/}
					<div className="navLeft">
						<div className="navIcon"></div>
						<div className="navWrap">
							<div className="navName">聖亞哥商旅</div>
							<div className="navEnName">SINYAGO HOTEL</div>
						</div>
						
					</div>
					<ul className="pcnav">
						<li>
							
							<Link to="/">首頁</Link>
						</li>
						<li><Link to="/Rooms">房間類型</Link></li>
						<li><Link to="/Map">交通路線</Link></li>
						<li>
							<a href="https://www.facebook.com/sinyagohotel/?locale=zh_TW">
								<i className="fa fa-facebook-square" style={{color: "rgb(3, 108, 228)"}} aria-hidden="true"></i>
							</a>
						</li>
						<li>
							<a href="https://line.me/ti/p/sinyago#~" style={{letterSpacing:"3.8px"}}>
								<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/LINE_New_App_Icon_%282020-12%29.png/600px-LINE_New_App_Icon_%282020-12%29.png" 
									style={{width:"1.5em"}}
								alt="line"/>
							</a>
						</li>
					</ul>
					
				</div>
				
				<div className={`phoneNav ${NavSwitch===0?"phoneNav-hidden":" "}`}>
					<ul>
						<li>
							<i className="fa fa-home" aria-hidden="true"></i>
							<Link to="/">首頁</Link>
						</li>
						<li><Link to="/Rooms">房間類型</Link></li>
						<li><Link to="/Map">交通路線</Link></li>
						<li>
							<a className="fb" href="https://www.facebook.com/sinyagohotel/?locale=zh_TW">
								<i className="fa fa-facebook-square" aria-hidden="true"></i>
								社群
							</a>
						</li>
						<li>
							<a href="https://line.me/ti/p/sinyago#~" style={{letterSpacing:"3.8px"}}>
								<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/LINE_New_App_Icon_%282020-12%29.png/600px-LINE_New_App_Icon_%282020-12%29.png" 
									style={{width:"1.5em"}}
								alt="line"/>
							Line</a>
						</li>
					</ul>
					
						
				
				</div>
				<button onClick={displayNav}className={`navButton ${NavSwitch===0?'':'navButton-Close'}`}>
				
					<i className={`${NavSwitch===0?'fa fa-bars':'fa fa-times'}`} aria-hidden="true"></i>
				
				</button>
			</div>
		</div>
		)
} 
export default Nav;