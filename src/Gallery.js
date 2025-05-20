import React from "react";
import Avatar from "./Avatar";
import './Gallery.css';

function Profile({ name, imageFile, power, universe, size }) {
  const person = { name, imageFile };

  return (
    <div className="profile-card">
      <Avatar person={person} size={size || 120} />
      <h3>{name}</h3>
      <p><strong>Poder:</strong> {power}</p>
      <p><strong>Universo:</strong> {universe}</p>
    </div>
  );
}

export default function Gallery() {
  return (
    <section>
      <h1 className="titulo">Super Heróis: Vingadores</h1>
      <div className="gallery-container">
        <div className="card">
          <Profile
            name="Homem de Ferro"
            imageFile="ironman.png"
            power="Tecnologia e Inteligência"
            universe="Marvel"
            size={120}
          />
          <Profile
            name="Thor"
            imageFile="thor.png"
            power="Poder do Trovão"
            universe="Marvel"
            size={120}
          />
          <Profile
            name="Pantera Negra"
            imageFile="pantera.png"
            power="Agilidade, tecnologia e liderança"
            universe="Marvel"
            size={120}
          />
          <Profile
            name="Capitão América"
            imageFile="capitao.png"
            power="Força e Escudo"
            universe="Marvel"
            size={120}
          />
        </div>
      </div>
    </section>
  );
}