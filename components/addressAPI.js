export default {
    enviar: async (CEP, logradouro, bairro, cidade, estado) => {
        let instyle = {
            CEP, 
            logradouro, 
            bairro, 
            cidade, 
            estado
        }

        let requisicao = {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(instyle)
        }

        const response = await fetch('http://localhost/instyle/', requisicao);
        const data = await response.json();
        return data.msg;
    }
}