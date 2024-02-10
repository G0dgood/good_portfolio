'use client'
import { useState } from "react";
import imgfull from "../../public/Img-full.svg";
import imgfull1 from "../../public/Img-full.svg";
import imgfull2 from "../../public/Img-full.svg";
import imgfull3 from "../../public/Img-full.svg";
import ServiceContainer from "@/components/ServiceContainer";


const Services = () => {



	const services = [
		{
			title: 'Web Design', image: imgfull, description: "You can customize a template or make your own from scratch, with an immersive library at your disposal.You can customize a template"
		},
		{
			title: 'UI/UX Design', image: imgfull1, description: "You can customize a template or make your own from scratch, with an immersive library at your disposal.You can customize a template"
		},
		{
			title: 'Mobile Application', image: imgfull2, description: "You can customize a template or make your own from scratch, with an immersive library at your disposal.You can customize a template"
		},
		{
			title: 'User research', image: imgfull3, description: "You can customize a template or make your own from scratch, with an immersive library at your disposal.You can customize a template"
		},
	];

	const [openIndex, setOpenIndex] = useState<number | null>(null);

	const handleServiceClick = (index: number) => {
		setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
	};

	return (
		<div className="services_container">
			<h6>Service</h6>
			<h2>My Specialties</h2>
			<>
				{services.map((service, index) => (
					<ServiceContainer
						key={index}
						isOpen={index === openIndex}
						onClick={() => handleServiceClick(index)}
						{...service}
					/>
				))}
			</>
		</div>
	)
}

export default Services