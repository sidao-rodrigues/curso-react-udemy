export function getStaticProps() {
  return {
    revalidate: 7, //atualiza o número de 7 em 7 segudos de uma página estática
    props: {
      numero: Math.random()
    }
  }
}

export default function Estatico3(props) {
  return (
    <div>
      <h1>Estático #03</h1>
      <h2>{props.numero}</h2>
    </div>
  );
}