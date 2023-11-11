import { Title } from '@/components/atoms/Title/Title';
import { Container } from '../../atoms/Container/Container';
import styles from './style.module.scss';
import { Carousel } from '@/components/molecules/Carousel/Carousel';
import Image from 'next/image';
import kek from '../../../public/img/hasbik.jpg';

export const WorkSection = () => {
	return (
		<section className={`${styles.works} section-containet`} id='works'>
			<Container>
				<Title levet='h2' classNames='section-title title'>Наши Работы</Title>
				<Carousel />
			</Container>
		</section>
	)
}
