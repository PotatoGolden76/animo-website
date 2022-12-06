import classNames from "classnames";
import { Link } from "react-router-dom";
import styles from "../styles/footer.module.scss"
import waves from "../assets/footer.svg";
export default function Footer(props: any) {
    return (
        <div className={classNames(styles.footer)}>
            <img src={waves} alt="waves" className={styles.waves} />
        </div>
    );
}

