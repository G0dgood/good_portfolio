import { PiArrowUpRightBold } from "react-icons/pi"
import Image from "next/image";
import img from "../../public/attachment.svg"


const Contact = () => {
	return (
		<div className="contact_container">
			<div className="contact_container_sub1">
				<h6>Contact</h6>
				<h2>Reach out me</h2>
				<p>249 king Sir, 05th Floor, Ultra House Building,
					Melboune, VIC 3000, London.</p>
				<h3>+2348062850763</h3>
				<h3>chinedu.go@gmail.com</h3>
				<div className="contact_social_container">
					<span>Facebook</span>
					<span>Twitter</span>
					<span>Instagram</span>
					<span>Linkedin</span>
				</div>
			</div>
			<div className="contact_container_sub2">
				<h3>any project?</h3>
				<div>
					<div className="contact_input_main_container">
						<div className="contact_input_single_container">
							<h5>Name</h5>
							<input type="text" />
						</div>
						<div className="contact_input_single_container">
							<h5>Email</h5>
							<input type="text" />
						</div>
					</div>

					<div className="contact_input_single_container_two">
						<h5>Message</h5>
						<input type="text" />
					</div>

					<div className="contact_input_single_container_three">
						<Image src={img} alt="home_img" />
						<h5>Attach file</h5>
					</div>
					<div className="home_container_small_bg_container">
						<p>Submit Now</p>
						<div>
							<PiArrowUpRightBold size={20} />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Contact


