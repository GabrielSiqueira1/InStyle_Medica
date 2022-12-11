import { useState, useEffect } from "react";
import axios from "axios";

export default function ListEnderecos () {

    const [funcList, setFuncList] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3001/api/getenderecos').then((response) => {
            setFuncList(response.data);
        })
    }, [])

    const deleteFunc = (id) => {
        axios.delete(`http://localhost:3001/api/deleteendereco/${id}`).then((response) => {
            setFuncList(response.data);
        })
        window.location.reload(false);
    }

    return(
        <div>
            <h1>Listar Endereços</h1>
            <table align="center">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>CEP</th>
                        <th>Logradouro</th>
                        <th>Bairro</th>
                        <th>Cidade</th>
                        <th>Estado</th>
                    </tr>
                </thead>
                <tbody>
                    {funcList.map((val, key) =>
                        <tr key={key}>
                            <td>{val.id}</td>
                            <td>{val.CEP}</td>
                            <td>{val.logradouro}</td>
                            <td>{val.bairro}</td>
                            <td>{val.cidade}</td>
                            <td>{val.estado}</td>
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