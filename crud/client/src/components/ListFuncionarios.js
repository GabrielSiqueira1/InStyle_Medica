import { useState, useEffect } from "react";
import axios from "axios";

export default function ListFuncionarios () {

    const [funcList, setFuncList] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3004/api/getfuncionarios').then((response) => {
            setFuncList(response.data);
        })
    }, [])

    const deleteFunc = (nome) => {
        axios.delete(`http://localhost:3004/api/deletefunc/${nome}`).then((response) => {
            setFuncList(response.data);
        })
        window.location.reload(false);
    }

    return(
        <div>
            <h1>Listar Funcionários</h1>
            <table align="center">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Telefone</th>
                        <th>CEP</th>
                        <th>Logradouro</th>
                        <th>Bairro</th>
                        <th>Cidade</th>
                        <th>Estado</th>
                        <th>Data Inicial</th>
                        <th>Salário</th>
                        <th>Senha</th>
                    </tr>
                </thead>
                <tbody>
                    {funcList.map((val, key) =>
                        <tr key={key}>
                            <td>{val.id}</td>
                            <td>{val.nome}</td>
                            <td>{val.email}</td>
                            <td>{val.telefone}</td>
                            <td>{val.cep}</td>
                            <td>{val.logradouro}</td>
                            <td>{val.bairro}</td>
                            <td>{val.cidade}</td>
                            <td>{val.estado}</td>
                            <td>{val.data_inicio}</td>
                            <td>{val.salario}</td>
                            <td>{val.senha}</td>
                            <td>
                                <button onClick= {() => {deleteFunc(val.nome); }}> 
                                    Delete
                                </button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}