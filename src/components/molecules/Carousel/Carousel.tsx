'use client';
import Image, { StaticImageData } from 'next/image';
import { register } from 'swiper/element/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';

// import styles from './style.module.scss';
import './style.scss';

register();

import 'swiper/scss';
import 'swiper/scss/effect-coverflow';
import 'swiper/scss/pagination';

import { Virtual, Pagination } from 'swiper/modules';
import { useCallback, useMemo, useState } from 'react';
import { slides } from '@/constants/constants';
import { ModalWindow } from '../../template/ModalWindow/ModalWindow';
import { useWindowWidth } from '@/hooks/useWindowWidth';

export const Carousel = (): JSX.Element => {
	const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
	const [selectedImage, setSelectedImage] = useState<StaticImageData | null>(null);
	const widthWindow: number = useWindowWidth();

	const getSlide = useCallback((slide: StaticImageData): void => {
		setSelectedImage(slide);
		setModalIsOpen(true);
	}, []);

	const perViev = useMemo(() => {
		if (widthWindow <= 576) return 1;
		if (widthWindow <= 992) return 2;
		return 3;
	}, [widthWindow]);

	return (
		<>
			<Swiper
				slidesPerView={perViev}
				centeredSlides={widthWindow < 500 ? true : false}
				spaceBetween={40}
				grabCursor={true}
				loop={true}
				pagination={{ el: '.swiper-pagination', clickable: true }}
				modules={[Pagination, Virtual]}
				className="swiper_container"
			>
				{slides.map((slide, i) => (
					<SwiperSlide key={i++} onClick={() => getSlide(slide.src)}>
						<Image src={slide.src} alt={slide.alt} priority />
					</SwiperSlide>
				))}

				<div className="slider-controler">
					<div className="swiper-pagination"></div>
				</div>
			</Swiper>

			<ModalWindow isOpen={modalIsOpen} handelClose={setModalIsOpen}>
				{selectedImage && <Image src={selectedImage} alt="slide_image" />}
			</ModalWindow>
		</>
	);
};
