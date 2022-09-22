import PowerCard from './components/powerCard';
import styles from './styles/homepage.module.scss';
import classNames from 'classnames';

import {
  faBacterium,
  faEnvelope,
  faStar,
  faFolderTree, faShrimp
} from '@fortawesome/free-solid-svg-icons'
import { TypeAnimation } from 'react-type-animation';

export default function App() {
  const containerTStyle = "container mx-auto p-5 flex gap-8 flex-wrap flex-row justify-center items-center";
  return (

    <div className={classNames(containerTStyle, styles.homeContainer)}>
      <TypeAnimation
        sequence={["< Hi, I'm Robert />"]}
        wrapper="h1"
        cursor={true}
        repeat={0}
        style={{ fontSize: '4rem' }}
      />
      <PowerCard text="About" destination="/about" color="red" icon={faBacterium} />
      <PowerCard text="Projects" destination="/projects" color="orange" icon={faFolderTree} />
      <PowerCard text="Resume" destination="/resume" color="yellow" icon={faStar} />
      <PowerCard text="Contact" destination="/contact" color="green" icon={faEnvelope} />
    </div>

  );
}

