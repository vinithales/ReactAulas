import React from 'react';

export default function PessoaContador({ titulo, quantidade, incrementar, decrementar, resetar, imagem }) {
  return (
    <div style={{ textAlign: 'center', margin: '0 20px' }}>
      <img src={imagem} alt={titulo} width={50} height={50} />
      <h2>{quantidade}</h2>
      <div>
        <button onClick={incrementar} style={{ backgroundColor: 'green', color: 'white', marginRight: 5 }}>+</button>
        <button onClick={decrementar} style={{ backgroundColor: 'red', color: 'white', marginRight: 5 }}>-</button>
        <button onClick={resetar}>Reset</button>
      </div>
      <p>{titulo}</p>
    </div>
  );
}