import { useRouter } from 'next/router'
import Link from 'next/link';

export default function buscar() {

  const router = useRouter();
  const codigo = router.query.id;

  return (
    <div>
      <h2>Rotas/{codigo}/buscar</h2>
      <Link href="/rotas">
        <button>Voltar</button>
      </Link>
    </div>
  )
}