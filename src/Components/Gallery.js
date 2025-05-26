// Gallery.js
import { Profile } from './Profile';

export default function Gallery() {
  return (
    <section>
      <h1>Galeria de Cientistas</h1>
      <Profile
        name="Gregorio Y. Zara"
        image="https://i.imgur.com/7vQD0fPs.jpg"
        profession="Engenheiro Filipino"
      />
      <Profile
        name="Hedy Lamarr"
        image="https://i.imgur.com/yXOvdOSs.jpg"
        profession="Atriz e Inventora"
      />
    </section>
  );
}
