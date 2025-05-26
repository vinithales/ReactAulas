import React from 'react';
import { Link } from 'react-router-dom';

export default function Semana04() {
  return (
    <div>
      <h1>Semana 04</h1>
      <ul>
        <li><Link to="/semana04/toolbar">Toolbar</Link></li>
        <li><Link to="/semana04/gallery2">Gallery</Link></li>
        <li><Link to="/semana04/counter">Counter</Link></li>
        <li><Link to="/semana04/form">Form</Link></li>
        <li><Link to="/semana04/moving-dot">MovingDot</Link></li>
        <li><Link to="/semana04/form2">Form2</Link></li>
        <li><Link to="/semana04/form3">Form3</Link></li>
        <li><Link to="/semana04/list">List</Link></li>
        <li><Link to="/semana04/list2">List2</Link></li>
        <li><Link to="/semana04/shape-editor">ShapeEditor</Link></li>
        <li><Link to="/semana04/counter-list">CounterList</Link></li>
        <li><Link to="/semana04/list3">List3</Link></li>
        <li><Link to="/semana04/list4">List4</Link></li>
        <li><Link to="/semana04/bucket-list">BucketList</Link></li>
      </ul>

      <br />
      <Link to="/">Retornar à página inicial</Link>
    </div>
  );
}
