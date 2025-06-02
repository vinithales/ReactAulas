import { useState } from 'react';

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const items = [
    { title: 'Seção 1', content: 'Conteúdo da seção 1' },
    { title: 'Seção 2', content: 'Conteúdo da seção 2' },
    { title: 'Seção 3', content: 'Conteúdo da seção 3' },
  ];

  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>
          <h3 onClick={() => setActiveIndex(index === activeIndex ? null : index)} style={{ cursor: 'pointer' }}>
            {item.title}
          </h3>
          {activeIndex === index && <p>{item.content}</p>}
        </div>
      ))}
    </div>
  );
}