'use client'
import Image from 'next/image';
import { HiOutlineMinus, HiOutlinePlus } from 'react-icons/hi';

const ServiceContainer = ({ title, image, description, isOpen, onClick }: any) => {
	return (
		<div className={isOpen ? 'services_container_sup_plus' : 'services_container_sup'}>
			<div className={isOpen ? 'services_container_sup1_plus' : 'services_container_sup1 '} onClick={onClick}>
				<div className={isOpen ? 'godot_fill_plus' : 'godot_fill'}></div>
				<h3>{title}</h3>
			</div>
			<div className={`services_container_sup2 ${isOpen ? 'open' : ''}`} onClick={onClick}>
				<div>
					{isOpen && (
						<div className="services_container_sup2_img_box">
							<Image src={image} alt="" />
						</div>
					)}

					<p>{description}</p>
				</div>
				<div className={isOpen ? 'icon-container' : 'icon-container_plus'}>
					{isOpen ? (
						<HiOutlineMinus size={40} />
					) : (
						<HiOutlinePlus size={40} />
					)}
				</div>
			</div>
		</div>
	);
};

export default ServiceContainer;

