import Avatar from './Avatar';

const hoje = new Date();
const person = {
    titulo: "Homem de Ferro",
    nomeReal: "Tony Stark",
    name: 'homemdeferro',
    imageFile: 'homemdeferro.png'
};

function formatarData(data) {
    return new Intl.DateTimeFormat(
        'pt-br',
        { weekday: 'long' }
    ).format(data);
}

export default function ToDoList() {
    return (
        <section>
            <h2 className='titulo'>📋 Lista de tarefas - Homem de Ferro</h2>
            <div className='toDoList'>
                <div className='cabecalho'>
                    <Avatar person={person} size={80} />
                    <div>
                        <h2 className='tituloh2'>
                            To-do list for {formatarData(hoje)} - {person.titulo}
                        </h2>
                        <h4 className='subtitulo'>{person.nomeReal}</h4>
                    </div>
                </div>
                <ul>
                    <li>🧪 Atualizar o reator ARC</li>
                    <li>💼 Reunião com investidores da Stark Industries</li>
                    <li>🛰️ Testar nova armadura com sistema de voo</li>
                    <li>🧠 Trabalhar com a IA JARVIS em novos projetos</li>
                </ul>
            </div>
        </section>
    );
}
