import PowerCard from './components/powerCard';
import styles from './styles/homepage.module.scss';
import classNames from 'classnames';

import {
  faCoffee,
  faDice,
  faEnvelope,
  faStar,
  faGears
} from '@fortawesome/free-solid-svg-icons'

export default function App() {
  const containerTStyle = "container mx-auto p-5 flex gap-8 flex-wrap flex-row justify-center items-center";
  return (

    <div className={classNames(containerTStyle, styles.homeContainer)}>
      <h1>Hi, I'm Robert</h1>
      <PowerCard text="About" destination="/about" color="red" icon={faCoffee} />
      <PowerCard text="Projects" destination="/projects" color="orange" icon={faGears} />
      <PowerCard text="Experience" destination="/experience" color="yellow" icon={faStar} />
      <PowerCard text="Contact" destination="/contact" color="green" icon={faEnvelope} />
      <PowerCard text="Random" destination="/contact" color="blue" icon={faDice} />
    </div>

  );
}

