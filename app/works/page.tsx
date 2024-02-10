import Image from "next/image";
import { PiArrowUpRightBold } from "react-icons/pi";
import img1 from "../../public/Img_1.svg"
import img2 from "../../public/Img_2.svg"
import img3 from "../../public/Img_3.svg"
import img4 from "../../public/Img_4.svg"


const Works = () => {
	return (
		<div className="works_container" >
			<h6  >Work</h6>
			<h2>Recent project</h2>
			<div className="works_container_sub_main">
				<div className="works_container_sub">
					<div className="works_container_sub_div">
						<p>UX case study</p>
						<h3>Bally
							Website
							Research</h3>
						<PiArrowUpRightBold size={38} />
					</div>
					<div className="works_container_img">
						<Image src={img1} alt="" />
					</div>
				</div>
				<div className="works_container_sub">
					<div className="works_container_sub_div">
						<p>UX case study</p>
						<h3>Bally
							Website
							Research</h3>
						<PiArrowUpRightBold size={38} />
					</div>
					<div className="works_container_img">
						<Image src={img2} alt="" />
					</div>
				</div>
				<div className="works_container_sub">
					<div className="works_container_sub_div">
						<p>UX case study</p>
						<h3>Bally
							Website
							Research</h3>
						<PiArrowUpRightBold size={38} />
					</div>
					<div className="works_container_img">
						<Image src={img3} alt="" />
					</div>
				</div>
				<div className="works_container_sub">
					<div className="works_container_sub_div">
						<p>UX case study</p>
						<h3>Bally
							Website
							Research</h3>
						<PiArrowUpRightBold size={38} />
					</div>
					<div className="works_container_img">
						<Image src={img4} alt="" />
					</div>
				</div>
			</div>

		</div>
	)
}

export default Works
