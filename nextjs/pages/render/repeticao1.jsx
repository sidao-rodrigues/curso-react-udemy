export default function Repeticao1() {
  const listaAprovados = [
    'Sidão', 'João', 'Mario', 'Pedro', 'Gabriel'
  ];

  function render() {
    return listaAprovados.map((la, i) => <li key={i}>{la}</li>);
  }
  return (
    <ul>
      {render()}
    </ul>
  )
}