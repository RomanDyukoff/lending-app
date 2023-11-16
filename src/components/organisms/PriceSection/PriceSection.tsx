import { Container } from '@/components/atoms/Container/Container';
import { Title } from '@/components/atoms/Title/Title';

import styles from './style.module.scss';

export const PriceSection = () => {
    return (
        <section className={`${styles.contacts} section-container`} id="price">
            <Container>
                <Title levet="h2" classNames="section-title title">
                    Цены
                </Title>
                тут будет информация о ценах и способах оформления, а также о замерах
            </Container>
        </section>
    );
};
