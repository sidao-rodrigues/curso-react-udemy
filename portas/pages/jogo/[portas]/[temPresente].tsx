import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Porta from '../../../components/Porta';
import { atualizarPortas, criarPortas } from '../../../functions/portas';
import style from '../../../styles/Jogo.module.css';
import Link from 'next/link';

export default function Jogo() {

  const router = useRouter();
  const [valido, setValido] = useState(false);
  const [portas, setPortas] = useState([]);


  useEffect(() => {
    const portas = +router.query.portas;
    const temPresente = +router.query.temPresente;

    const qtdePortasValidas  = portas >= 3 && portas <= 100;
    const temPresenteValido = temPresente >= 1 && temPresente <= portas;

    setValido(qtdePortasValidas && temPresenteValido);
  }, [portas, router.query.protas, router.query.temPresente])

  useEffect(() => {
    const portas = +router.query.portas;
    const temPresente = +router.query.temPresente;
    setPortas(criarPortas(portas, temPresente));
  }, [router?.query])

  function renderizarPortas() {
    return portas.map(porta => {
      return <Porta key={porta.numero} value={porta}
      onChange={novaPorta => setPortas(atualizarPortas(portas, novaPorta))}/>
    })
  }

  return (
    <div id={style.jogo}>
      <div className={style.portas}>
        {valido ?
          renderizarPortas() :
          <h2>Valores inválidos</h2>
        }
      </div>
      <div className={style.botoes}>
        <Link href="/">
            <button>Reiniciar Jogo</button>
        </Link>
      </div>
    </div>
  )
}