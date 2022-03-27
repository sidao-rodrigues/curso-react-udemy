import Filho from './Filho';

export default function Pai() {
  function falar(param) {
    console.log('alguém falou comigo', param);
  }
  return (
    <div>
      <Filho funcao={falar} />
    </div>
  )
}