// DrinkRecipe.js
export default function DrinkRecipe({ drinkers }) {
  return (
    <section>
      <h1>Receita de Chá</h1>
      <ul>
        <li>{2 * drinkers} xícaras de água</li>
        <li>{drinkers} colheres de chá</li>
        <li>{0.5 * drinkers} xícaras de leite</li>
      </ul>
    </section>
  );
}
