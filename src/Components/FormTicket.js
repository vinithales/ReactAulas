import { useState } from 'react';

export default function FormTicket() {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', boxShadow: '0 2px 5px rgba(0,0,0,0.2)', padding: '20px', borderRadius: '8px' }}>
      <h2>Vamos fazer seu check-in</h2>
      <p>Nome:</p>
      <input value={nome} onChange={(e) => setNome(e.target.value)} />
      <p>Sobrenome:</p>
      <input value={sobrenome} onChange={(e) => setSobrenome(e.target.value)} />
      <p>Seu ticket será emitido para: <strong>{nome} {sobrenome}</strong></p>
    </div>
  );
}
