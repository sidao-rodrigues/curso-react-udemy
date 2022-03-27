import Casa from '../../components/Casa';

export default function tabuleiro() {
  return (
    <div className="container">
      {[...Array(8).keys()].map(v => {
        return [...Array(8).keys()].map(v2 => {
          const [p1, p2] = v2 % 2 == 0 ? ['preto', 'branco'] : ['branco', 'preto'];
          return <Casa key={v} color={v % 2 ? p1 : p2} />
        })
      })}
    </div>
  )
}