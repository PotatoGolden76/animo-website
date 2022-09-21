import classNames from 'classnames';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/homepage.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function PowerCard(props: any) {
  const nav = useNavigate();
  const handle = useCallback(() => nav(props.destination, { replace: false }), [nav]);

  return (
    <div className={classNames(styles.powerCard, styles[props.color])} style={{ height: parseInt(props.height || 200), width: parseInt(props.width || 200) }} onClick={handle}>
      <FontAwesomeIcon icon={props.icon} size="2x" spin={props.spin} />
      <p className={classNames(styles.powerTitle)}>{props.text}</p>
    </div>
  );
}

