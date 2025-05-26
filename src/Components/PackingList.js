// PackingList.js
function Item({ name, isPacked }) {
  return (
    <li>
      {isPacked ? <del>{name} ✔</del> : name}
    </li>
  );
}

export default function PackingList() {
  return (
    <section>
      <h1>Lista de Viagem</h1>
      <ul>
        <Item isPacked={true} name="Fone de ouvido" />
        <Item isPacked={false} name="Escova de dentes" />
        <Item isPacked={true} name="Carregador" />
      </ul>
    </section>
  );
}
