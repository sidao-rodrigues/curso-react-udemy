export default function Filho(props) {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <h3>{props.nome}</h3>
      <h2>{props.familha}</h2>
    </div>
  )
}