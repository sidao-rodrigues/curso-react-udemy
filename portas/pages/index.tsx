import Cartao from '../components/Cartao';
import style from '../styles/Formulario.module.css';
import Link from 'next/link';
import EntradaNumerica from '../components/EntradaNumerica';
import { useState } from 'react';

export default function Formulario() {
  const [qtdePortas, setQtdePortas] = useState(3);
  const [comPresente, setComPresente] = useState(1);

  return (
    <div className={style.formulario}>
      <div>
        <Cartao bgcolor="#c0392c">
          Monty Hall
        </Cartao>
        <Cartao>
          <EntradaNumerica text="Qtde Portas?" value={qtdePortas} onChange={novaQtde => setQtdePortas(novaQtde)}/>
        </Cartao>
      </div>
      <div>
        <Cartao>
          <EntradaNumerica text="Portas com Presente?" value={comPresente} onChange={novaPortacomPresente => setComPresente(novaPortacomPresente)}/>
        </Cartao>
        <Cartao bgcolor="#28a085">
          <Link href={`/jogo/${qtdePortas}/${comPresente}`}>
            <h2 className={style.link}>
              Iniciar
            </h2>
          </Link>
        </Cartao>
      </div>
    </div>
  )
}
