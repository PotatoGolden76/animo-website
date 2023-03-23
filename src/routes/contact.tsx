import styles from '../styles/about.module.scss';
import classNames from 'classnames';
import Header from '../components/header';
import Footer from '../components/footer';

export default function Contact() {
    const containerTStyle = "container";
    return (
        <>
            <Header />

            <section className={classNames(containerTStyle, styles.infoContainer, styles.contactContainer)}>
                <h1>Contact</h1>
                <p>
                    - Informatii suplimentare: 0743.168.491
                </p>
                <p>
                    - Email: admin@centrulanimo.com
                </p>
                <p>
                    - Adresa centrului: str. Inginer Zablovschi, nr.24, sector 1, Bucuresti (zona Turda-Ion Mihalache)
                    – doar cu programare
                </p>

            </section>

            <Footer />
        </>
    );
}

