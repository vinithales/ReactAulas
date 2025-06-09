import { useState } from 'react';

export default function FormQuiz() {
  const [resposta, setResposta] = useState('');
  const [mensagem, setMensagem] = useState('');

  function verificarResposta(e) {
    e.preventDefault();
    setMensagem(resposta.trim().toLowerCase() === 'lima' ? 'Resposta correta!' : 'Tente novamente.');
  }

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', boxShadow: '0 2px 5px rgba(0,0,0,0.2)', padding: '20px', borderRadius: '8px' }}>
      <h2>Quiz da Cidade</h2>
      <p>Em qual cidade há um outdoor que transforma ar em água potável?</p>
      <form onSubmit={verificarResposta}>
        <textarea
          value={resposta}
          onChange={(e) => setResposta(e.target.value)}
          style={{ width: '100%', marginBottom: '10px' }}
        />
        <button type="submit">Enviar</button>
      </form>
      <p>{mensagem}</p>
    </div>
  );
}
