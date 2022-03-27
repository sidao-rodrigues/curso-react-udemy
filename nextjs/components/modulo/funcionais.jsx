export function Comp1() {
  return <h2>Comp1</h2>
}

export const Comp2 = function () {
  return <h2>Comp2</h2>
}

export default function Comp3() {
  return (
    <div>
      <h2>Comp3</h2>
    </div>
  )
}

/*export default () => (
  <div>alguma coisa</div>
)*/

export const Comp4 = props => <h2>Comp 4 {props.msg}</h2>

const Comp7 = props => <h2>Comp7 {props.msg}</h2>
const Comp8 = props => <h2>Comp 8 {props.msg}</h2>

export {
  Comp7, Comp8
}