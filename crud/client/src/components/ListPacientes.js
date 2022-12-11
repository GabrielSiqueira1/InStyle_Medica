import { useState, useEffect } from "react";
import axios from "axios";

export default function ListPacientes () {

    const [funcList, setFuncList] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3004/api/getpacientes').then((response) => {
            setFuncList(response.data);
        })
    }, [])

    const deleteFunc = (nome) => {
        axios.delete(`http://localhost:3004/api/deletepaciente/${nome}`).then((response) => {
            setFuncList(response.data);
        })
        window.location.reload(false);
    }

    return(
        <div>
            <h1>Listar Pacientes</h1>
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
                        <th>Peso</th>
                        <th>Altura</th>
                        <th>Tipo Sanguíneo</th>
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
                            <td>{val.peso}</td>
                            <td>{val.altura}</td>
                            <td>{val.tipo_sanguineo}</td>
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