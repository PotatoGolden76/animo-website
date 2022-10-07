import Header from '../components/header';
import styles from '../styles/projects.module.scss'

import dataJSON from '../projects.json'
import classNames from 'classnames';
import PowerCard from '../components/powerCard';

interface Project {
  name: string,
  icon?: string,
  color: string,
  link: string
}
export default function Projects(props: any) {

  const data: Project[] = dataJSON;

  return (
    <>
        <Header />
        
        <h1 className={styles.title}>My Projects</h1>

        <div className={classNames("container mx-auto flex flex-row gap-8 justify-center flex-wrap ")}>
          {data.map((e: Project) => { return <PowerCard text={e.name} color={e.color} destination={e.link} key={e.name} icon={e.icon ? require("@fortawesome/free-solid-svg-icons")[e.icon] : null} width="350px" height="250px"/>})}
        </div>
    </>
  );
}

