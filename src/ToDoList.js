import Avatar from './Avatar';
import './List.css';

const hoje = new Date();
const person = {
    titulo: "Pantera Negra",
    nomeReal: "Rei T'Challa",
    name: 'pantera',
    imageFile: 'pantera.png'
};

function formatarData(data) {
    return new Intl.DateTimeFormat(
        'pt-br',
        { weekday: 'long'}
    ).format(data);
}

export default function ToDoList() {
    return (
        <section>
            <h2 className='titulo'>📋 Lista de tarefas - Pantera Negra</h2>
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
                    <li>🛡️ Defender Wakanda</li>
                    <li>🤝 Reunião com os Vingadores</li>
                    <li>🔬 Pesquisar novas tecnologias com Shuri</li>
                    <li>🌍 Diplomacia com outras nações</li>
                </ul>
            </div>
        </section>
    );
}