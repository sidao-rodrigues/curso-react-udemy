import style from '../styles/Porta.module.css';
import Presente from './Presente';
import PortaModel from '../model/porta';


interface PortaProps {
  value: PortaModel
  onChange: (novaPorta: PortaModel) => void
}

export default function Porta(props: PortaProps) {
  const porta = props.value;
  const selecionada = porta.selecionada && !porta.aberta ? style.selecionada : '';

  const alterarSelecao = e => props.onChange(porta.alterarSelecao());
  const abrir = e => {
    e.stopPropagation();
    props.onChange(porta.abrir())
  }

  function renderizarPorta () {
    return (
      <>
        <div className={style.porta}>
          <div className={style.numero}>{porta.numero}</div>
          <div className={style.macaneta} onClick={abrir}></div>
        </div>
      </>
    );
  }
  return (
    <div className={style.area} onClick={alterarSelecao}>
      <div className={`${style.estrutura} ${selecionada}`}>
        {porta.fechada ?
          renderizarPorta() : (porta.temPresente && <Presente />) }
      </div>
      <div className={style.chao}></div>
    </div>
  );
}