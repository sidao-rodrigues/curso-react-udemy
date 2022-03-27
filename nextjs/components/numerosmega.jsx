import styles from '../styles/Megasena.module.css';

export default function NumeroMegaSena(props) {
  return (
    <div className={styles.numeros}>
      <span>{props.number}</span>
    </div>
  );
}