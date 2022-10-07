import classNames from "classnames";
import { Link } from "react-router-dom";
import styles from "../styles/header.module.scss"
import PowerCard from "./powerCard";

export default function Header(props: any) {

    const headerTStyle = "flex flex-col md:flex-row items-center justify-center px-5";
    const sectionTStyle = "flex flex-row items-center justify-center gap-5 md:w-2/4 my-3 md:my-0";


    return (
        <div className={classNames(styles.header, headerTStyle)}>
            <section className={classNames(sectionTStyle)}>
                <Link to="/"><h1 className={styles.logo}> {"</>"} Robert Haranguș</h1></Link>
            </section>

            <nav className={classNames(sectionTStyle)}>
                <div className={styles.button}>About</div>
                <div className={styles.button}>Projects</div>
                <div className={styles.button}>Resume</div>
                <div className={styles.button}>Contact</div>
            </nav>
        </div>
    );
}

