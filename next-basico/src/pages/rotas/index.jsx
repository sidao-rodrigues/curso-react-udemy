import Link from 'next/link'
import router, { useRouter } from 'next/router';

export default function rotas() {

  function navegacao(url) {
    router.push(url);
  }

  function navegacaoParams() {
    router.push({
      pathname: '/rotas/params',
      query: {
        id: 123,
        nome: 'mopa'
      }
    })
  }

  return (
    <div>
      <h2>Rotas</h2>
      <ul>
        <Link href="/rotas/params?id=123&nome=Sidney">
          <li>Params</li>
        </Link>
        <Link href="/rotas/id/buscar">
          <li>Buscar</li>
        </Link>
        <Link href="/rotas/id/nome">
          <li>Nome</li>
        </Link>
      </ul>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start'
      }}>
        <button onClick={() => navegacao('/rotas/id/buscar')}>Buscar</button>
        <button onClick={() => navegacao('/rotas/params?id=123&nome=Sidney')}>1</button>
        <button onClick={() => navegacao('/rotas/id/nome')}>2</button>
        <button onClick={() => navegacaoParams()}>3</button>
      </div>
    </div>
  )
}