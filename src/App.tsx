import PowerCard from './components/powerCard';
import styles from './styles/homepage.module.scss';
import classNames from 'classnames';
import Header from './components/header';
import logo from './assets/logo.png';

import wave from './assets/main-waves.svg';

import wave1 from './assets/wave1.svg';
import wave2 from './assets/wave2.svg';
import wave3 from './assets/wave3.svg';
import { faBookOpen, faPeopleGroup, faNewspaper, faMessage } from '@fortawesome/free-solid-svg-icons'
import Footer from './components/footer';

export default function App() {
  const containerTStyle = "container";
  const bannerTStyle = "m-0 p-5 w-100 bg-black flex gap-8 flex-wrap flex-row justify-center items-center";
  return (
    <>
      <Header />

      <div className={classNames(styles.banner, bannerTStyle)}>
        <section className={styles.bannerContent}>
          <img src={logo} className={styles.bannerImage} alt="Logo" />
          <h1 className={styles.bannerTitle}>Centrul Animo<h2 className={styles.bannerSubtitle}>
            Psihologi buni, aproape de tine
          </h2></h1>

        </section>
        <img className={styles.waves} src={wave} alt="" />

      </div>

      <div className={classNames(containerTStyle, styles.homeContainer)}>
        <div className={styles.cardContainer}>
          <PowerCard text="Despre Noi" icon={faBookOpen} wave={wave1} destination={"/about"} />
          <PowerCard text="Echipa" icon={faPeopleGroup} wave={wave2} destination={"/team"} />
          <PowerCard text="Articole" icon={faNewspaper} wave={wave3} destination={"/articles"} />
          <PowerCard text="Testimoniale" icon={faMessage} wave={wave1} destination={"/testimonials"} />

          <PowerCard text="Contacteaza-ne" destination={"/testimonials"} width={"87%"} height={"100px"} fullBg/>
        </div>
        
      </div>
      <Footer />
    </>
  );
}

