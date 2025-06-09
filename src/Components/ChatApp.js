import { useState } from 'react';

function ContactList({ contatos, idSelecionado, aoSelecionar }) {
  return (
    <div>
      {contatos.map((contato) => (
        <button
          key={contato.id}
          onClick={() => aoSelecionar(contato.id)}
          style={{ display: 'block', marginBottom: '5px', fontWeight: contato.id === idSelecionado ? 'bold' : 'normal' }}
        >
          {contato.nome}
        </button>
      ))}
    </div>
  );
}

function Chat({ contato }) {
  const [mensagem, setMensagem] = useState('');

  return (
    <div style={{ marginLeft: '20px', flexGrow: 1 }}>
      <h3>Chat com {contato.nome}</h3>
      <textarea
        placeholder={`Escreva para ${contato.nome}`}
        value={mensagem}
        onChange={(e) => setMensagem(e.target.value)}
        style={{ width: '100%', height: '100px' }}
      />
      <button style={{ marginTop: '10px' }}>Enviar para {contato.email}</button>
    </div>
  );
}

const contatos = [
  { id: 0, nome: 'Taylor', email: 'taylor@mail.com' },
  { id: 1, nome: 'Alice', email: 'alice@mail.com' },
  { id: 2, nome: 'Bob', email: 'bob@mail.com' },
];

export default function ChatApp() {
  const [idSelecionado, setIdSelecionado] = useState(0);
  const contatoSelecionado = contatos.find(c => c.id === idSelecionado);

  return (
    <div style={{ display: 'flex', padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <ContactList contatos={contatos} idSelecionado={idSelecionado} aoSelecionar={setIdSelecionado} />
      <Chat contato={contatoSelecionado} />
    </div>
  );
}
