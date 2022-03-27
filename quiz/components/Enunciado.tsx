import sytles from '../styles/Enunciado.module.css';

interface EnunciadoProps {
  texto: string;
}

export default function Enunciado(props: EnunciadoProps) {
  return (
    <div className={sytles.enunciado}>
      <span className={sytles.texto}>{props.texto}</span>
    </div>
  )
}