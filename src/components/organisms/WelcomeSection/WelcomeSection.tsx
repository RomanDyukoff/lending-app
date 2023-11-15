import styles from "./style.module.scss";

export const WelcomeSection = (): JSX.Element => {
    return (
        <section className={styles.welcome} id="welcome">
            <div className={styles.welcome__bg} />
            <div className="container">
                <div className={styles.welcome__content}>
                    <p className={styles.welcome__text}>Здесь краткое описание нашей фирмы</p>
                </div>
            </div>
        </section>
    );
};
