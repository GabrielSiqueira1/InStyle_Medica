import { useState } from "react";
import axios from "axios";
import "./CreateMedico.css"

export default function CreateMedico () {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cep, setCep] = useState('');
    const [logradouro, setLogr] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [data_inicio, setData] = useState('');
    const [salario, setSalario] = useState('');
    const [senha, setSenha] = useState('');
    const [especialidade, setEspecialidade] = useState('');
    const [crm, setCrm] = useState('');

    const submitMedico = () => {
        axios.post('http://localhost:3004/api/insertmedico', {
            nome: nome,
            email: email,
            telefone: telefone,
            cep: cep,
            logradouro: logradouro,
            bairro: bairro,
            cidade: cidade,
            estado: estado,
            data_inicio: data_inicio,
            salario: salario,
            senha: senha,
            especialidade: especialidade,
            crm: crm,
        }).then(() => {
            alert("sucessful insert");
        });
    };
    
    return(
        <div>
            <h2>Cadastrar Médico</h2>

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
                                <label>Data Inicial: </label>
                            </th>
                            <td>
                                <input type="text" name="data_inicio" onChange={(e) => {
                                    setData(e.target.value)
                                }}/>
                            </td>
                        </tr>
                        <tr>
                            <th align="right">
                                <label>Salário: </label>
                            </th>
                            <td>
                                <input type="text" name="salario" onChange={(e) => {
                                    setSalario(e.target.value)
                                }}/>
                            </td>
                        </tr>
                        <tr>
                            <th align="right">
                                <label>Senha: </label>
                            </th>
                            <td>
                                <input type="text" name="senha" onChange={(e) => {
                                    setSenha(e.target.value)
                                }}/>
                            </td>
                        </tr>
                        <tr>
                            <th align="right">
                                <label>Especialidade: </label>
                            </th>
                            <td>
                                <input type="text" name="especialidade" onChange={(e) => {
                                    setEspecialidade(e.target.value)
                                }}/>
                            </td>
                        </tr>
                        <tr>
                            <th align="right">
                                <label>CRM: </label>
                            </th>
                            <td>
                                <input type="text" name="crm" onChange={(e) => {
                                    setCrm(e.target.value)
                                }}/>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2" align="right">
                                <button onClick={submitMedico}>Save</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
}