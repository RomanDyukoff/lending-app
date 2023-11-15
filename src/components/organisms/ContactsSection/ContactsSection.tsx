"use client";

import { Map, YMaps } from "@pbe/react-yandex-maps";

import { Title } from "@/components/atoms/Title/Title";

import { Container } from "../../atoms/Container/Container";

import styles from "./style.module.scss";

export const ContactsSection = (): JSX.Element => {
    return (
        <section className={`${styles.contacts} section-container`} id="contacts">
            <Container>
                <Title levet="h2" classNames="section-title title">
                    Контакты
                </Title>
                <div className={styles.contacts__content}>
                    <div className={styles.info}>
                        <h5 className={styles.info__title}>По всем вопросам обращайтесь:</h5>
                        <address className={styles.info__address}>
                            <a href="#">Для получения информации: (617) 730-2370</a>
                            <a href="#">Сделать замеры (617) 730-2370</a>
                            <a href="#">Обсудить цену: (617) 730-2385</a>
                            <span>Наш адресс: г. Витебск ул. Фрунзе</span>
                        </address>
                    </div>
                    <div className={styles.contacts__map}>
                        <YMaps>
                            <Map
                                width="100%"
                                height="400px"
                                defaultState={{ center: [55.184218, 30.202877], zoom: 9 }}
                            />
                        </YMaps>
                    </div>
                </div>
            </Container>
        </section>
    );
};
