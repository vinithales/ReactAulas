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
            <h2 className='titulo'>🕵️‍♀️ Lista de viagem da Viúva Negra</h2>
            <div className='toDoList'>
                <h2 className='tituloh2'>Packing list - Natasha Romanoff</h2>
                <ul>
                    <Item isPacked={true} name={'🖤 Uniforme tático'} />
                    <Item isPacked={true} name={'🧬 Soro antídoto'} />
                    <Item isPacked={false} name={'🕶️ Óculos de visão noturna'} />
                    <Item isPacked={false} name={'🔫 Pistolas com silenciador'} />
                    <Item isPacked={false} name={'📓 Caderno com anotações da missão'} />
                </ul>
            </div>
        </section>
    );
}
