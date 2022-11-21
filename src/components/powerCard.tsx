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
    <div className={classNames(styles.card, props.fullBg ? styles.fullBg : "")} onClick={handle} style={{ height: props.height || "200px", width: props.width || "200px" }}>
      <div className={styles.iconContainer}>
        {props.icon ? <FontAwesomeIcon icon={props.icon} size="xl" /> : null}
        {props.image ? <img src={props.image} alt="" /> : null}
        {props.image ? <h2 className={styles.cardTitle}>
          {props.text}
        </h2> : null}
      </div>
      {!props.image ? <div className={styles.cardBody}>
        {props.wave ? <img className={styles.wave} src={props.wave} alt="" /> : null}
        <h2 className={styles.cardTitle}>
          {props.text}
        </h2>
      </div> : null}
    </div>
  );
}

