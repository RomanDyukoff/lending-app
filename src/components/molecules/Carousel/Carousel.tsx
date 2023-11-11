'use client';
import Image from 'next/image';
import { register } from 'swiper/element/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';

import kek from '../../../public/img/hasbik.jpg'

// import styles from './style.module.scss';
import './style.scss';

register();

import 'swiper/scss';
import 'swiper/scss/effect-coverflow';
import 'swiper/scss/navigation';

import { EffectCoverflow, Navigation } from 'swiper/modules';

export const Carousel = () => {
	return (
		<div className="content">
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
				modules={[EffectCoverflow, Navigation]}
				className="swiper_container"
			>
				<SwiperSlide>
					<Image src={kek} alt="slide_image" />
				</SwiperSlide>
				<SwiperSlide>
					<Image src={kek} alt="slide_image" />
				</SwiperSlide>
				<SwiperSlide>
					<Image src={kek} alt="slide_image" />
				</SwiperSlide>
				<SwiperSlide>
					<Image src={kek} alt="slide_image" />
				</SwiperSlide>
				<SwiperSlide>
					<Image src={kek} alt="slide_image" />
				</SwiperSlide>
				<SwiperSlide>
					<Image src={kek} alt="slide_image" />
				</SwiperSlide>


				<div className="slider-controler">
					<div className="swiper-button-prev slider-arrow">
						-
					</div>
					<div className="swiper-button-next slider-arrow">
						+
					</div>
				</div>
			</Swiper>
		</div>
	);
}
