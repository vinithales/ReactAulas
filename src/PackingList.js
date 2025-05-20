import './List.css';

function Item({ name, isPacked }) {
    return (
        <li className='item'>
            {isPacked ? (
                <>
                    <del>{name}</del> <span role="img" aria-label="checked">✔️</span>
                </>
            ) : (
                name
            )}
        </li>
    );
}

export default function PackingList() {
    return (
        <section>
            <h2 className='titulo'>⚡ Lista de viagem do Thor</h2>
            <div className='toDoList'>
                <h2 className='tituloh2'>Packing list - Thor Odinson</h2>
                <ul>
                    <Item isPacked={true} name={'🪓 Stormbreaker'} />
                    <Item isPacked={true} name={'⚡ Capa vermelha'} />
                    <Item isPacked={false} name={'🔨 Mjolnir (caso encontre)'} />
                    <Item isPacked={false} name={'🥇 Medalha da Batalha de Nova York'} />
                    <Item isPacked={false} name={'🌩️ Protetor solar para Asgardianos'} />
                </ul>
            </div>
        </section>
    );
}