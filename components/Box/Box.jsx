import styles from './Box.module.scss';
 export default function Box({ children, className }) {
  return (
    <div className={`${styles.sidebar__box} ${className}`}>{children}</div>
  );
}
