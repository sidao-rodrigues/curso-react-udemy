function acao1() {
  console.log('action 1');
}

function acao2(e) {
  //pegando a ação
  console.log(e);
}

export default function botao() {
  return (
    <div>
      <button onClick={acao1}>click</button>
      <button onClick={acao2}>click</button>
    </div>
  )
}