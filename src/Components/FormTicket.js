import { useState } from 'react';

export default function FormTicket() {
  const [text, setText] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [sent, setSent] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSending(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSending(false);
    setSent(true);
  }

  if (sent) {
    return <h2>Ticket enviado!</h2>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>Descreva seu problema:</p>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <br />
      <button type="submit" disabled={isSending}>
        {isSending ? 'Enviando...' : 'Enviar'}
      </button>
    </form>
  );
}