import classNames from 'classnames';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/powercard.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function PowerCard(props: any) {
  const nav = useNavigate();
  const handle = useCallback(() => {
    if (props.destination.startsWith("https")) {
      window.location.href = props.destination;
      return;
    }
    return nav(props.destination, { replace: false })
  }, [nav]);

  return (
    // <div className={classNames(styles.powerCard, props.noHover ? null : styles.detach, styles[props.color])} style={{ height: props.height || "200px", width: props.width || "200px" }} onClick={handle}>
    //   {props.icon ? <FontAwesomeIcon icon={props.icon} size="2x" spin={props.spin} /> : null}
    //   <p className={classNames(styles.powerTitle, props.smallText ? styles.smallTitle : null)}>{props.text}</p>
    // </div>

    <div className={styles.card} onClick={handle}>
      <div className={styles.iconContainer}>
        {props.icon ? <FontAwesomeIcon icon={props.icon} size="xl" /> : null}
      </div>
      <div className={styles.cardBody}>
        <img src={props.wave} alt="" className={styles.wave} />
        <h2 className={styles.cardTitle}>
          {props.text}
        </h2>
      </div>
    </div>
  );
}

