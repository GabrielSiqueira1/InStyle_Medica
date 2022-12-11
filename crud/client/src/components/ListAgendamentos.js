import { useState, useEffect } from "react";
import axios from "axios";

export default function ListAgendamentos () {

    const [funcList, setFuncList] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3001/api/getagendamentos').then((response) => {
            setFuncList(response.data);
        })
    }, [])

    const deleteFunc = (id) => {
        axios.delete(`http://localhost:3001/api/deleteagendamento/${id}`).then((response) => {
            setFuncList(response.data);
        })
        window.location.reload(false);
    }

    return(
        <div>
            <h1>Listar Agendamentos</h1>
            <table align="center">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Especialidade</th>
                        <th>Medico</th>
                        <th>Data</th>
                        <th>Horário</th>
                        <th>Paciente</th>
                        <th>Telefone</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {funcList.map((val, key) =>
                        <tr key={key}>
                            <td>{val.id}</td>
                            <td>{val.especialidade}</td>
                            <td>{val.medico}</td>
                            <td>{val.data}</td>
                            <td>{val.horario}</td>
                            <td>{val.paciente}</td>
                            <td>{val.telefone}</td>
                            <td>{val.email}</td>
                            <td>
                                <button onClick= {() => {deleteFunc(val.id); }}> 
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