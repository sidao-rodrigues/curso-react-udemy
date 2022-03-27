import { useState } from 'react/cjs/react.development'

export default function mouse() {
  const [count, setCount] = useState(0);

  function counter(isIncrement) {
    const qtd = isIncrement ? (count + 1) : (count - 1);
    setCount(qtd);
  }

  return (
    <div>
      <h1>Contador</h1>
      <div>Valor: {count}</div>
      <span style={{ margin: '5px' }}>
        <button onClick={() => counter(false)}>-</button>
        <button onClick={() => counter(true)}>+</button>
      </span>
    </div>
  )
}