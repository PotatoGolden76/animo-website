import styles from '../styles/homepage.module.scss';
import classNames from 'classnames';
import Header from '../components/header';

export default function About() {
  const containerTStyle = "container";
  const bannerTStyle = "m-0 p-5 w-100 bg-black flex gap-8 flex-wrap flex-row justify-center items-center";
  return (
    <>
      <Header />

      <div className={classNames(containerTStyle, styles.homeContainer)}>


      </div>
    </>
  );
}

