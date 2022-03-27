import { useState } from 'react';

export default function formulario() {
  const [valor, setValor] = useState('initial');
  function alterarValor(e) {
    setValor(e);
  }
  return (
    <div>
      <input type="text" value={valor} onChange={e => setValor(e.target.value)} />
    </div>
  );
}