import '../style/googlemap.css';

const Googlemap=()=>{

	return(
		<div className="Googlemap">
			<div className="googlemap-wrap">

				<iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3074.3749606386928!2d120.29531844280116!3d22.63282817590707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e0462198b05af%3A0xe7003decfb72ef26!2z6IGW5Lqe5ZOl5ZWG5YuZ5peF6aSo!5e0!3m2!1szh-TW!2stw!4v1676524133319!5m2!1szh-TW!2stw" 
					style={{
						
						loading:"lazy"}}
					allowFullScreen=""  
					frameBorder="1"
					title="Map"
					referrerPolicy="no-referrer-when-downgrade">
				</iframe>
				<div className="attractions">
					
					<i className="fa fa-map-signs" aria-hidden="true">景點</i>
					<p>{`
						六合夜市 - 步行 4 分鐘 
						漢神百貨 - 開車 7 分鐘 
						中央公園 - 步行 10 分鐘 
						愛河 - 步行 15 分鐘 
						城市光廊 - 步行 16 分鐘
						`}
					</p>
					<i className="fa fa-train" aria-hidden="true">鄰近交通</i>
					<p>{`
						捷運市議會站 - 走路 6 分鐘
						捷運高雄站/高雄車站 - 走路 15 分鐘
						高雄小港機場 (KHH) - 開車 22 分鐘
						`}
					</p>
				</div>
			</div>
		</div>
		);
};
export default Googlemap;