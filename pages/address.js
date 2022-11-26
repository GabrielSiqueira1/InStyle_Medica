import { Container, Box } from "@chakra-ui/react";
import { FormLabel } from "@chakra-ui/react";
import { Input, Button } from "@chakra-ui/react";
import Section from "../components/section";
import addressAPI from "../components/addressAPI";

function address(){

    const handleEnviar = async (e) =>{
        e.preventDefault();
        alert(await (addressAPI.enviar(e.target.CEP.value, e.target.logradouro.value, e.target.bairro.value, e.target.cidade.value, e.target.estado.value)));
    }

    return (
        <Container p = {14} maxW="container.md">
            <Box as="address" pb={8} w= "100%">
        
                <Section>
                    <div className="Address">
                        <form className="form-login" onSubmit={handleEnviar}>
                            <FormLabel p={4} for="CEP">CEP</FormLabel>
                            <Input 
                            type="text" 
                            name="CEP" 
                            placeholder="CEP" 
                            required
                            minlength="8"
                            maxlength="9"
                            />
                            <FormLabel p={4} for="logradouro">Logradouro</FormLabel>
                            <Input 
                            type="text" 
                            name="logradouro" 
                            placeholder="logradouro" 
                            required
                            minlength="0"
                            maxlength="255"
                            />
                            <FormLabel p={4} for="bairro">Bairro</FormLabel>
                            <Input 
                            type="text" 
                            name="bairro" 
                            placeholder="bairro" 
                            required
                            minlength="0"
                            maxlength="255"
                            />
                            <FormLabel p={4} for="cidade">Cidade</FormLabel>
                            <Input 
                            type="text" 
                            name="cidade" 
                            placeholder="cidade" 
                            required
                            minlength="0"
                            maxlength="255"
                            />
                            <FormLabel p={4} for="estado">Estado</FormLabel>
                            <Input 
                            type="text" 
                            name="estado" 
                            placeholder="estado" 
                            required
                            minlength="0"
                            maxlength="255"
                            />
                            <Box p = {4}>
                                <Button type="submit">Enviar</Button>
                            </Box>
                        </form>
                    </div>
                </Section>

            </Box>

        </Container>
    )
}

export default address;