export async function getStaticProps() {
  const respo = await fetch('http://localhost:3000/api/produtos');
  const produtos = await respo.json();

  return {
    props: {
      produtos
    }
  }
}

export default function Estatico4(props) {

  function renderizarProdutos() {
    return props.produtos.map(p => {
      return <li key={p.id}>{p.id} - {p.nome} tem preço de R$ {p.preco}</li>
    })
  }
  return (
    <div>
      <h1>Estático #04</h1>
      {renderizarProdutos()}
    </div>
  );
}