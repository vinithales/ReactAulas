import { useState } from 'react';

function ContactList({ contacts, selectedId, onSelect }) {
  return (
    <ul>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <button
            onClick={() => onSelect(contact.id)}
            style={{ fontWeight: contact.id === selectedId ? 'bold' : 'normal' }}
          >
            {contact.name}
          </button>
        </li>
      ))}
    </ul>
  );
}

function Chat({ contact }) {
  return (
    <section>
      <h2>Conversando com {contact.name}</h2>
      <p>{contact.email}</p>
    </section>
  );
}

const contacts = [
  { id: 0, name: 'Maria', email: 'maria@example.com' },
  { id: 1, name: 'José', email: 'jose@example.com' },
  { id: 2, name: 'Ana', email: 'ana@example.com' },
];

export default function ChatApp() {
  const [selectedId, setSelectedId] = useState(0);
  const selectedContact = contacts.find((c) => c.id === selectedId);

  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      <ContactList
        contacts={contacts}
        selectedId={selectedId}
        onSelect={setSelectedId}
      />
      <Chat contact={selectedContact} />
    </div>
  );
}