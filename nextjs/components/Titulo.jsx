import sytle from '../styles/Home.module.css';

export default function Titulo(props) {
  const { title, subtitle } = props;
  return (
    <>
      <h1 style={{
        color: sytle.teste,
        backgroundColor: '#000'
      }}>{title}</h1>
      <h2 sytle={{
        color: sytle.teste,
        backgroundColor: '#000'
      }}>{subtitle}</h2>
      <hr />
    </>
  );
}