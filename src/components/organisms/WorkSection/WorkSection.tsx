import { Title } from "@/components/atoms/Title/Title";
import { Carousel } from "@/components/molecules/Carousel/Carousel";

import { Container } from "../../atoms/Container/Container";

import styles from "./style.module.scss";

export const WorkSection = (): JSX.Element => {
    return (
        <section className={`${styles.works} section-containet`} id="works">
            <Container>
                <Title levet="h2" classNames="section-title title">
                    Наши Работы
                </Title>
                <Carousel />
            </Container>
        </section>
    );
};
