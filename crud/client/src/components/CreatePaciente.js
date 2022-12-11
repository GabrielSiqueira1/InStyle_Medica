import { useState } from "react";
import axios from "axios";
import "./CreatePaciente.css"

export default function CreatePaciente () {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cep, setCep] = useState('');
    const [logradouro, setLogr] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [tipo_sanguineo, setTipo] = useState('');

    const submitFuncionario = () => {
        axios.post('http://localhost:3001/api/insertpaciente', {
            nome: nome,
            email: email,
            telefone: telefone,
            cep: cep,
            logradouro: logradouro,
            bairro: bairro,
            cidade: cidade,
            estado: estado,
            peso: peso,
            altura: altura,
            tipo_sanguineo: tipo_sanguineo,
        }).then(() => {
            alert("sucessful insert");
        });
    };
    
    return(
        <div>
            <h2>Cadastrar Paciente</h2>

            <form className="form">
                <table align="center">
                    <tbody>
                        <tr>
                            <th align="right">
                                <label>Nome: </label>
                            </th>
                            <td>
                                <input type="text" name="nome" onChange={(e) => {
                                    setNome(e.target.value)
                                }}/>
                            </td>
                        </tr>
                        <tr>
                            <th align="right">
                                <label>E-mail: </label>
                            </th>
                            <td>
                                <input type="text" name="email" onChange={(e) => {
                                    setEmail(e.target.value)
                                }}/>
                            </td>
                        </tr>
                        <tr>
                            <th align="right">
                                <label>Telefone: </label>
                            </th>
                            <td>
                                <input type="text" name="telefone" onChange={(e) => {
                                    setTelefone(e.target.value)
                                }}/>
                            </td>
                        </tr>
                        <tr>
                            <th align="right">
                                <label>CEP: </label>
                            </th>
                            <td>
                                <input type="text" name="cep" onChange={(e) => {
                                    setCep(e.target.value)
                                }}/>
                            </td>
                        </tr>
                        <tr>
                            <th align="right">
                                <label>Logradouro: </label>
                            </th>
                            <td>
                                <input type="text" name="logradouro" onChange={(e) => {
                                    setLogr(e.target.value)
                                }}/>
                            </td>
                        </tr>
                        <tr>
                            <th align="right">
                                <label>Bairro: </label>
                            </th>
                            <td>
                                <input type="text" name="bairro" onChange={(e) => {
                                    setBairro(e.target.value)
                                }}/>
                            </td>
                        </tr>
                        <tr>
                            <th align="right">
                                <label>Cidade: </label>
                            </th>
                            <td>
                                <input type="text" name="cidade" onChange={(e) => {
                                    setCidade(e.target.value)
                                }}/>
                            </td>
                        </tr>
                        <tr>
                            <th align="right">
                                <label>Estado: </label>
                            </th>
                            <td>
                                <input type="text" name="estado" onChange={(e) => {
                                    setEstado(e.target.value)
                                }}/>
                            </td>
                        </tr>
                        <tr>
                            <th align="right">
                                <label>Peso: </label>
                            </th>
                            <td>
                                <input type="text" name="peso" onChange={(e) => {
                                    setPeso(e.target.value)
                                }}/>
                            </td>
                        </tr>
                        <tr>
                            <th align="right">
                                <label>Altura: </label>
                            </th>
                            <td>
                                <input type="text" name="altura" onChange={(e) => {
                                    setAltura(e.target.value)
                                }}/>
                            </td>
                        </tr>
                        <tr>
                            <th align="right">
                                <label>Tipo Sanguíneo: </label>
                            </th>
                            <td>
                                <input type="text" name="tipo_sanguineo" onChange={(e) => {
                                    setTipo(e.target.value)
                                }}/>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2" align="right">
                                <button onClick={submitFuncionario}>Save</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
}