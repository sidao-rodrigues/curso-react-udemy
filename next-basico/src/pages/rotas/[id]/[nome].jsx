import { useRouter } from 'next/router'
import Link from 'next/link';

export default function nome() {

  const router = useRouter();
  const codigo = router.query.id;
  const nome = router.query.nome;

  return (
    <div>
      <h2>Rotas/{codigo}/{nome}</h2>
      <Link href="/rotas">
        <button>Voltar</button>
      </Link>
    </div>
  )
}