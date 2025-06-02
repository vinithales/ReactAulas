import { useState } from 'react';

export default function FormQuiz() {
  const [answer, setAnswer] = useState('');

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <h2>Qual linguagem é usada para estilizar páginas web?</h2>
      <input
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />
      <p>
        {answer.toLowerCase() === 'css' ? 'Correto!' : 'Tente novamente.'}
      </p>
    </form>
  );
}