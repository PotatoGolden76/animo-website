import classNames from "classnames";
import { Link } from "react-router-dom";
import styles from "../styles/footer.module.scss"
import waves from "../assets/footer.svg";
export default function Footer(props: any) {

    const headerTStyle = "gap-8 flex flex-col md:flex-row items-center justify-center px-5";
    const sectionTStyle = "flex flex-row items-center justify-center gap-5 md:w-2/4 my-3 md:my-0";
    //TODO: fix position

    return (
        <div className={classNames(styles.footer)}>
            <img src={waves} alt="waves" className={styles.waves} />
        </div>
    );
}

