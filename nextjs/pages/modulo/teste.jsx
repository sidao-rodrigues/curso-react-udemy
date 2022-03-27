import FuncaoPadrao, { Comp1 as Blabla, Comp2, Comp4 } from '../../components/modulo/funcionais';

export default function teste() {
  return (
    <div>
      <FuncaoPadrao></FuncaoPadrao>
      <Comp2></Comp2>
      <Comp4 msg={'massa'} />
      <Blabla></Blabla>
    </div>
  )
}