import { Link } from 'react-router-dom';
import "./ListMedicos";

export default function ListUser () {

    return(
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/list_user/list_medicos">Listar Médicos</Link>
                    </li>
                    <li>
                        <Link to="/list_user/list_func">Listar Funcionários</Link>
                    </li>
                    <li>
                        <Link to="/list_user/list_pacientes">Listar Pacientes</Link>
                    </li>
                    <li>
                        <Link to="/list_user/list_enderecos">Listar Endereços</Link>
                    </li>
                    <li>
                        <Link to="/list_user/list_agendamentos">Listar Agendamentos</Link>
                    </li>
                </ul>
            </nav>
        </div>
        
    );
}