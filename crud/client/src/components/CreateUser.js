import { Link } from 'react-router-dom';

export default function CreateUser () {
    return(
        <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/create_user/create_medico">Cadastrar Médico</Link>
                        </li>
                        <li>
                            <Link to="/create_user/create_funcionario">Cadastrar Funcionário</Link>
                        </li>
                        <li>
                            <Link to="/create_user/create_paciente">Cadastrar Paciente</Link>
                        </li>
                    </ul>
                </nav>
        </div>
        
    );
}