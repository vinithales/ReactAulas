import React from 'react';
import { Link } from 'react-router-dom';
import Gallery from './Components/Gallery';
import PackingList from './Components/PackingList';
import DrinkRecipe from './Components/DrinkRecipe';

export default function Semana02() {
  return (
    <div>
      <h1>Semana 2 Componentes React</h1>
      
      <h2>Exemplo 1: Galeria de Cientistas</h2>
      <Gallery />

      <h2>Exemplo 2: Lista com Renderização Condicional</h2>
      <PackingList />

      <h2>Exemplo 3: Componente Puro com Cálculo</h2>
      <DrinkRecipe drinkers={2} />

      <br />
      <Link to="/">Retornar à página inicial</Link>
    </div>
  );
}
