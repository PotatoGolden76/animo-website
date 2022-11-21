import styles from '../styles/team.module.scss';
import classNames from 'classnames';
import Header from '../components/header';
import Footer from '../components/footer';

import simona from '../assets/profiles/simona1.jpg';
import PowerCard from '../components/powerCard';

export default function Team() {
  const containerTStyle = "container";
  //TODO: add team member page
  //TODO: add navigation
  return (
    <>
      <Header />

      <section className={classNames(containerTStyle, styles.infoContainer)}>
        <h1>Fondatori</h1>
        <div className={styles.imageContainer}>
          <div className={styles.picCard}>
            <img src={simona} alt="simona mocioi" />
            <h2>
              Simona Constanta Mocioi
            </h2>
          </div>

          <div className={styles.picCard}>
            <img src={simona} alt="simona mocioi" />
            <h2>
              Ioana Venera Costache
            </h2>
          </div>
        </div>

        <hr />
        <h1>Colaboratori Interni</h1>
        <div className={styles.imageContainer}>
          <div className={styles.picCard}>
            <img src={simona} alt="simona mocioi" />
            <h2>
              Monica Stanica
            </h2>
          </div>

          <div className={styles.picCard}>
            <img src={simona} alt="simona mocioi" />
            <h2>
              Augustina Elena Purda
            </h2>
          </div>

          <div className={styles.picCard}>
            <img src={simona} alt="simona mocioi" />
            <h2>
              Ana Maria Vulpescu
            </h2>
          </div>
        </div>

        <hr />
        <h1>Colaboratori Externi</h1>
        <div className={styles.imageContainer}>
          <div className={styles.picCard}>
            <img src={simona} alt="simona mocioi" />
            <h2>
              Maria Spataru
            </h2>
          </div>

          <div className={styles.picCard}>
            <img src={simona} alt="simona mocioi" />
            <h2>
              Iuliana Scutaru
            </h2>
          </div>

          <div className={styles.picCard}>
            <img src={simona} alt="simona mocioi" />
            <h2>
              Vera Constantinescu
            </h2>
          </div>
        </div>

      </section>
      <Footer />
    </>
  );
}

