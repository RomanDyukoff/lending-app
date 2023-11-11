import { Title } from '@/components/atoms/Title/Title';
import { Container } from '../../atoms/Container/Container';
import styles from './style.module.scss';

export const AboutSection = () => {
	return (
		<section id='about' className={`${styles.about} section-container`}>
			<Container>
				<Title levet='h2' classNames='section-title title'>О Нас</Title>
				<p className={`${styles.about__text} section-text`}>
					Тут распологается информация о нас сколько лет мы в деле и чем мы занимаемся
				</p>
			</Container>
		</section>
	)
}
