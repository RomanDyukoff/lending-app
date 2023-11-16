import { Container } from '@/components/atoms/Container/Container';

import styles from './style.module.scss';

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Container>тут будет регистрация фирмы год создания и ссылки на соцсети</Container>
        </footer>
    );
};
