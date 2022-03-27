export default function Lista1() {
  return (
    <div>
      {[...Array(11).keys()].map(l => {
        return (l > 0 && <span key={l}>{l}{l < 10 ? ',' : ''} </span>);
      })}
    </div>
  );
}