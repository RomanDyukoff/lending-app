'use client';
import Image from 'next/image';
import { register } from 'swiper/element/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import Modal from 'react-modal';

import kek from '../../../public/img/hasbik.jpg'

// import styles from './style.module.scss';
import './style.scss';

register();

import 'swiper/scss';
import 'swiper/scss/effect-coverflow';
import 'swiper/scss/navigation';

import { EffectCoverflow, Navigation, Virtual } from 'swiper/modules';
import { useState } from 'react';
import { slides } from '@/constants/constants';


const customStyles = {
	overlay: {
		backgroundColor: 'rgba(0, 0, 0, 0.75)',
		zIndex: '10',
	},
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
		display: 'flex',
		flexDirection: 'column' as "column",
		alignItems: 'center',
		justifyContent: 'center',
		padding: "2rem",
	}
};

export const Carousel = () => {
	const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

	const openModal = () => {
		setModalIsOpen(true);
	}

	const closeModal = () => {
		setModalIsOpen(false);
	}


	return (
		<>
			<Swiper
				effect={'coverflow'}
				grabCursor={true}
				centeredSlides={true}
				loop={true}
				slidesPerView={'auto'}
				coverflowEffect={{
					rotate: 0,
					stretch: 0,
					depth: 100,
					modifier: 2.5,
				}}
				navigation={{
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				}}
				modules={[EffectCoverflow, Navigation, Virtual]}
				className="swiper_container"
			>


				{
					slides.map((slide, i) => (
						<SwiperSlide key={i++} onClick={openModal}>
							<Image src={slide.src} alt={slide.alt} priority />
						</SwiperSlide>
					))
				}


				<div className="slider-controler">
					<div className="swiper-button-prev slider-arrow">
						-
					</div>
					<div className="swiper-button-next slider-arrow">
						+
					</div>
				</div>
			</Swiper>

			<Modal
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				style={customStyles}
				contentLabel="Example Modal"
				ariaHideApp={false}
			>
				<Image src={kek} alt="slide_image" />
				<button onClick={closeModal} style={{ position: 'absolute', top: "0", right: "0", cursor: "pointer" }}> Close</button>
			</Modal >
		</>
	);
}
