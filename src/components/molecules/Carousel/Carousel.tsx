'use client';

import { useCallback, useMemo, useState } from 'react';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import { register } from 'swiper/element/bundle';
import { Pagination, Virtual } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { slides } from '@/constants/constants';
import { useResize } from '@/hooks/useResize';

import 'swiper/scss';
import 'swiper/scss/effect-coverflow';
import 'swiper/scss/pagination';

import { ModalWindow } from '../../template/ModalWindow/ModalWindow';

// import styles from './style.module.scss';
import './style.scss';

register();

export const Carousel = (): JSX.Element => {
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
    const [selectedImage, setSelectedImage] = useState<StaticImageData | null>(null);
    const windowSize = useResize();

    const getSlide = useCallback((slide: StaticImageData): void => {
        setSelectedImage(slide);
        setModalIsOpen(true);
    }, []);

    const perViev = useMemo(() => {
        if (windowSize) {
            if (window.innerWidth <= 576) return 1;

            if (window.innerWidth <= 992) return 2;
        }

        return 3;
    }, [windowSize]);

    return (
        <>
            <Swiper
                slidesPerView={perViev}
                centeredSlides={windowSize === 768}
                spaceBetween={40}
                grabCursor
                loop
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
                    <div className="swiper-pagination" />
                </div>
            </Swiper>

            <ModalWindow isOpen={modalIsOpen} handelClose={setModalIsOpen}>
                {selectedImage && <Image src={selectedImage} alt="slide_image" />}
            </ModalWindow>
        </>
    );
};
