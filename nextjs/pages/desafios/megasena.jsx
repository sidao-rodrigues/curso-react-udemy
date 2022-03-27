import { useState } from 'react';
import NumeroMegaSena from '../../components/numerosmega';
import styles from '../../styles/Megasena.module.css';

const generatedNumbers = (number, f) => {
  f(false);
  const list = [];
  while (list.length < number) {
    const n = getRandomIntInclusive();

    if (!list.includes(n)) {
      list.push(n);
    }
  }
  return list.sort((a, b) => a - b);
}

const getRandomIntInclusive = () => {
  const min = 1, max = 60;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function megaSena() {

  const [num, setNum] = useState(6);
  const [numbers, setNumbers] = useState([]);
  const [disponivel, setDisponivel] = useState(false);

  const gerador = () => {
    if (num === '') {
      alert('Informe um número de geração!');
    } else {
      setNumbers(generatedNumbers(num, setDisponivel));
      setDisponivel(true);
    }
  }

  return (
    <div className={styles.container_mega}>
      <h1>Gerador Números Mega sena</h1>
      <div className={styles.lista_numeros}>
        {
          numbers.length > 0 ? (
            disponivel &&
            numbers.map(n => {
              return <NumeroMegaSena key={n} number={n} />
            })
          ) : (
            <div>...</div>
          )
        }
      </div>
      <div className={styles.inputs}>
        <input type="number" placeholder="Inseria uma outra quantidade" value={num} onChange={e => setNum(e.target.value)} min={1} max={60}/>
        <button onClick={() => gerador()}>Gerar Números</button>
      </div>
    </div>
  );
}