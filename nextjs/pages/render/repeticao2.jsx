import lista from '../../data/listaProdutos';
export default function Repeticao1() {

  function render() {
    return lista.map(produto => {
      return (
        <tr key={produto.id}>
          <td>{produto.id}</td>
          <td>{produto.nome}</td>
          <td>{produto.preco}</td>
        </tr>
      );
    })
  }

  return (
    <>
      <table style={{ boder: '1px solid red' }}>
        <thead>
          <tr>
            <th>Código</th>
            <th>Nome</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
          {render()}
        </tbody>
      </table>
    </>
  )
}