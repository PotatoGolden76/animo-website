import styles from '../styles/team.module.scss';
import classNames from 'classnames';
import Header from '../components/header';
import Footer from '../components/footer';

import simona from '../assets/profiles/simona1.jpg';
import ioana from '../assets/profiles/ioana.jpeg';
import monica from '../assets/profiles/monica.jpeg';
import augustina from '../assets/profiles/augustina.jpeg';
import ana from '../assets/profiles/ana.jpeg';
import maria from '../assets/profiles/maria.jpeg';
import iuliana from '../assets/profiles/iuliana.jpeg';
import vera from '../assets/profiles/vera.jpeg';
import { Link } from 'react-router-dom';

export default function Team() {
  const containerTStyle = "container";
  //TODO: add team member page
  //TODO: add navigation
  //TODO: add pictures

  //TODO: change alts
  return (
    <>
      <Header />

      <section className={classNames(containerTStyle, styles.infoContainer)}>
        <h1>Fondatori</h1>
        <div className={styles.imageContainer}>
          <Link to="/members/simona" className={styles.picCard}>
            <img src={simona} alt="simona mocioi" />
            <h2>
              Simona Constanta Mocioi
            </h2>
          </Link>

          <Link to="/members/ioana" className={styles.picCard}>
            <img src={ioana} alt="simona mocioi" />
            <h2>
              Ioana Venera Costache
            </h2>
          </Link>
        </div>

        <hr />
        <h1>Colaboratori Interni</h1>
        <div className={styles.imageContainer}>
          <Link to="/members/monica" className={styles.picCard}>
            <img src={monica} alt="simona mocioi" />
            <h2>
              Monica Stanica
            </h2>
          </Link>

          <Link to="/members/augustina" className={styles.picCard}>
            <img src={augustina} alt="simona mocioi" />
            <h2>
              Augustina Elena Purda
            </h2>
          </Link>

          <Link to="/members/ana" className={styles.picCard}>
            <img src={ana} alt="simona mocioi" />
            <h2>
              Ana Maria Vulpescu
            </h2>
          </Link>
        </div>

        <hr />
        <h1>Colaboratori Externi</h1>
        <div className={styles.imageContainer}>
          <Link to="/members/maria" className={styles.picCard}>
            <img src={maria} alt="simona mocioi" />
            <h2>
              Maria Spataru
            </h2>
          </Link>

          <Link to="/members/iuliana" className={styles.picCard}>
            <img src={iuliana} alt="simona mocioi" />
            <h2>
              Iuliana Scutaru
            </h2>
          </Link>

          <Link to="/members/vera" className={styles.picCard}>
            <img src={vera} alt="simona mocioi" />
            <h2>
              Vera Constantinescu
            </h2>
          </Link>
        </div>

      </section>
      <Footer />
    </>
  );
}

