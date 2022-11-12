import { Container, Box, Heading } from "@chakra-ui/react"

const Page = () => {
  return (<Container>
            <Box borderRadius="lg" bg="grey" p={3} mb={6} align="center">
              InStyle Medica, sua saúde é o nosso objetivo.
            </Box>
            <Box display={{md: 'flex'}}>

            </Box>  
            <Box flexGrow={1}>
              <Heading>InStyle Medica</Heading>
              <p>Clínica Médica</p>
            </Box>
            <Box>

            </Box>
          </Container>
  )
}

export default Page
