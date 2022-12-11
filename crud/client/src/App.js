import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ListUser from './components/ListUser';
import CreateUser from './components/CreateUser';
import EditUser from './components/EditUser';
import CreateMedico from './components/CreateMedico';
import ListMedicos from './components/ListMedicos';
import CreateFuncionario from './components/CreateFuncionario';
import ListFuncionarios from './components/ListFuncionarios';
import CreatePaciente from './components/CreatePaciente';
import ListAgendamentos from './components/ListAgendamentos';
import ListEnderecos from './components/ListEnderecos';

function App() {
  return (
    <div className="App">
      <h1>Página Restrita</h1>
      <h5>Esta página é responsável por permitir ao usuário criar novos usuários e listá-los</h5>
      <h5>A navegação é feita através dos botões abaixo</h5>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">Início</Link>
            </li>
            <li>
              <Link to="/list_users">Listas</Link>
            </li>
            <li>
              <Link to="/create_user">Cadastrar Usuário</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/list_users" element={<ListUser />} />
          <Route path="/create_user" element={<CreateUser />} />
          <Route path="/:id/edit" element={<EditUser />} />
          <Route path="/create_user/create_medico" element={<CreateMedico />} />
          <Route path="/create_user/create_funcionario" element={<CreateFuncionario />} />
          <Route path="/create_user/create_paciente" element={<CreatePaciente />} />
          <Route path="/list_user/list_medicos" element={<ListMedicos />} />
          <Route path="/list_user/list_func" element={<ListFuncionarios />} />
          <Route path="/list_user/list_pacientes" element={<ListFuncionarios />} />
          <Route path="/list_user/list_agendamentos" element={<ListAgendamentos />} />
          <Route path="/list_user/list_enderecos" element={<ListEnderecos />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
