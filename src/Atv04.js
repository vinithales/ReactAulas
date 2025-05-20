import ContadorPessoas from './Components/ContadorPessoas';
import { Link } from 'react-router-dom';

export default function Atv04() {
  return (
    <>
      <h1>Atividade</h1>
      <ContadorPessoas />
      <br />
      <Link to="/">retornar à página inicial</Link>
    </>
  );
}