import Nav from "../../Components/nav.js";
import RoomType0 from "./components/roomType0.js";
import RoomType1 from "./components/roomType1.js";
import RoomType2 from "./components/roomType2.js";
import RoomType3 from "./components/roomType3.js";
import RoomType4 from "./components/roomType4.js";
import Notice from"./components/notice.js";
import Footer from "../../Components/footer.js";

import {RoomCard} from'../../data/roomCard.js';
import {Classicroom4} from '../../data/classicroom4.js';
import {Room4} from '../../data/room4.js';
import {Room3} from '../../data/room3.js';
import {Double1bed} from '../../data/double1bed.js';
import {Double2bed} from '../../data/double2bed.js';
import './style/roomType.css';
const Rooms=()=>{
	return(
		<div>
			<Nav/>
			<div className="roomType">
				<div className="roomType-wrap">
					<div className="roomType-title">
						房間類型
					</div>
					<div className="Cards">
						<RoomType0 RoomCard={RoomCard} Classicroom4={Classicroom4}/>
						<RoomType1 RoomCard={RoomCard} Room4={Room4}/>
						<RoomType2 RoomCard={RoomCard} Room3={Room3}/>
						
						
						
						<RoomType3 RoomCard={RoomCard} Double1bed={Double1bed}/>
						<RoomType4 RoomCard={RoomCard} Double2bed={Double2bed}/>
						{/**/}
					</div>
					<Notice/>
				</div>
				

			</div>
			<Footer/>
		</div>
		);
};
export default Rooms;