import Filho from './Filho';

export default function Pai() {
  return (
    <div>
      <Filho nome="Antônia" familha="Silva" />
      <Filho nome="Danielle" familha="Ferreira" />
      <Filho nome="Sidney" familha="Lima" />
    </div>
  )
}