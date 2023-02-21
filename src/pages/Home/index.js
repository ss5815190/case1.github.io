import Item2 from"./components/item2.js";
import Introduce from"./components/introduce.js";
import {Sliderimgs} from "../../data/sliderimgs.js";
import Nav from "../../Components/nav.js";
const Home =()=>{
	return(
		<div>
			<Nav/>
			<Item2 Sliderimgs={Sliderimgs}/>
			<Introduce/>

		</div>
		
		);
};
export default Home;