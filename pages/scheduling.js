import React from "react";
import { Container, Box } from "@chakra-ui/react";
import Section from "../components/section";
import { Select } from "@chakra-ui/react";

const Scheduling = () => {
    return (
        <Container p = {14} maxW="container.md"> 
            <Box as="address" pb={8} w= "100%">
        
                <Section>
                    <form className="form-login"></form>
                        <Select>
                            <option>Teste</option>
                            <option>Teste</option>
                            <option>Teste</option>
                        </Select>

                </Section>
            </Box>
        </Container>
    )
}

export default Scheduling

