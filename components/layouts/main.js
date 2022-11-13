import Head from 'next/head'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8} w= "100%">
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <title>InStyle Medica - Pagina principal</title>
      </Head>

      <NavBar path={router.asPath}/>

      <Container p = {14} maxW="container.md">

        {children}

      </Container>
    </Box>
  ) 
}

export default Main
