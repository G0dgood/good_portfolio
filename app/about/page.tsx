/* eslint-disable react/no-unescaped-entities */
import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";
import img from '../../public/about_Img.svg';
import { PiUserSquare } from "react-icons/pi";
import { TfiEmail } from "react-icons/tfi";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlinePhone } from "react-icons/md";
import { ImQuotesLeft } from "react-icons/im";
import { PiArrowUpRightBold } from "react-icons/pi";


const About = () => {

	return (
		<div className="About_container">
			<div className="About_container_main">
				<h6 className="About_container_h6">Nice to meet you!</h6>
				<h2 className="About_container_h2">Welcome to...</h2>

				<div className="About_img_container">
					<div className="About_img_container_sub">
						<Image src={img} alt="home_img" />
						<div className="about_img_container_two">
							<h2>Godwin Chinedu</h2>
							<p>Product Designer <small className="about_img_container_two_small">based in</small> Lagos</p>
						</div>

						<div className="two_small_sub">
							<p>Download CV</p> <div className="two_small_sub_icon_container">
								<GoArrowUpRight />
							</div>
						</div>
					</div>
					<div className="About_img_container_text">
						<div className="About_img_icon_container">

							<div className="About_icon_container_text_main">
								<div className="About_icon_container_text">
									<MdOutlinePhone size={20} />
								</div>
								<h6 className="About_icon_container_number">+2348062850763</h6>
							</div>

							<div className="About_icon_container_text_main">
								<div className="About_icon_container_text">
									<PiUserSquare size={20} />
								</div>
								<h6 className="About_icon_container_number">Male</h6>
							</div>
							<div className="About_icon_container_text_main">
								<div className="About_icon_container_text">
									<TfiEmail size={20} />
								</div>
								<h6 className="About_icon_container_number">chinedu.go@gmail.com</h6>
							</div>
							<div className="About_icon_container_text_main">
								<div className="About_icon_container_text">
									<IoLocationOutline size={20} />
								</div>
								<h6 className="About_icon_container_number">Nigeria, Lagos </h6>
							</div>
						</div>
						<div className="experience_container">
							<div className="experience_container_years">
								<div className="ten_years">
									<h1 >5+</h1>
									<div>
										<p className="ten_years_p">Years</p>
										<p className="ten_years_p">experience...</p>
									</div>
								</div>
								<p className="ten_years_p_sub">
									Hello there! My name is <span >Godwin Chinedu</span>.
									I am a web designer & developer, and I'm very passionate and dedicated to my work.
								</p>
							</div>

							<div className="experience_container_years">
								<div className="ten_years">
									<h1>4+</h1>
									<div>
										<p className="ten_years_p">Clients</p>
										<p className="ten_years_p">Worldwide...</p>
									</div>
								</div>
								<p className="ten_years_p_sub">
									With 5+ years experience as a professional Software Developer,
									I have acquired the skills and knowledge necessary to make your project a success.
								</p>
							</div>
						</div>
						<div className="quote_container">
							<ImQuotesLeft size={64} color="#434242" />
							<p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus sed sit ultrices et sed metus sollicitudin.”</p>
						</div>
					</div>

				</div>

			</div>

			<div className="my_experience_container">
				<div className="my_experience_container_sub">
					<h6>Experience</h6>
					<h1>My experience</h1>
					<p className="my_experience_container_sub_p">Hello there! My name is Jacob Jones.
						I am a web designer & developer, and I'm very passionate and dedicated to my work.</p>

					<div className="home_container_small_bg_container">
						<p>Download my resume</p>
						<div>
							<PiArrowUpRightBold size={20} />
						</div>
					</div>
				</div>

				<div>
					<div className="my_experience_container_sub_side">
						<div className="my_experience_side_p_container">
							<p className="my_experience_side_p_container_p1">-2018 - Present</p>
							<p className="my_experience_side_p_container_p2">-Rolling Thunder</p>
						</div>
						<h3 className="my_experience_side_p_container_h3">Lead UI/UX Designer</h3>
					</div>
					<div className="my_experience_container_sub_side my_experience_padding">
						<div className="my_experience_side_p_container">
							<p className="my_experience_side_p_container_p1">-2018 - 2010</p>
							<p className="my_experience_side_p_container_p2">-Locost Accessories</p>
						</div>
						<h3 className="my_experience_side_p_container_h3">Senior UI/UX Designer</h3>
					</div>
					<div className="my_experience_container_sub_side my_experience_padding">
						<div className="my_experience_side_p_container">
							<p className="my_experience_side_p_container_p1">-2008 - 2006</p>
							<p className="my_experience_side_p_container_p2">-Sagebrush</p>
						</div>
						<h3 className="my_experience_side_p_container_h3">Junior UI/UX Designer</h3>
					</div>
				</div>
			</div>
		</div>
	)
}

export default About
