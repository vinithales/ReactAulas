import { useState } from 'react';

export default function Accordion() {
  const [indiceAtivo, setIndiceAtivo] = useState(null);

  const secoes = [
    { titulo: 'Sobre', conteudo: 'Com uma população de cerca de 2 milhões, Almaty é a maior cidade do Cazaquistão. Foi sua capital de 1929 a 1997.' },
    { titulo: 'Etimologia', conteudo: 'A palavra "Almaty" vem do cazaque e significa "rico em maçãs".' }
  ];

  return (
    <div style={{ maxWidth: '500px', margin: 'auto', padding: '20px' }}>
      <h2>Almaty, Cazaquistão</h2>
      {secoes.map((secao, i) => (
        <div key={i} style={{ marginBottom: '10px', border: '1px solid #ccc', padding: '10px' }}>
          <h3>{secao.titulo}</h3>
          <button onClick={() => setIndiceAtivo(indiceAtivo === i ? null : i)}>
            {indiceAtivo === i ? 'Ocultar' : 'Mostrar'}
          </button>
          {indiceAtivo === i && <p>{secao.conteudo}</p>}
        </div>
      ))}
    </div>
  );
}
