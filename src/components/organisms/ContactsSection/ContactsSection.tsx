import { Title } from '@/components/atoms/Title/Title';
import { Container } from '../../atoms/Container/Container';
import styles from './style.module.scss';

export const ContactsSection = () => {
	return (
		<section className={`${styles.contacts} section-container`} id='contacts'>
			<Container>
				<Title levet='h2' classNames='section-title title'>Контакты</Title>
			</Container>
		</section>
	)
}
