import { Container, Box, Heading, Link, Button } from '@chakra-ui/react'
import Paragraph from '../components/paragraph'
import NextLink from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { AboutSection, AboutYear } from '../components/about'
import { PhotosGridItem } from '../components/grid-item'
import thumbHomePage from '../public/images/contents/home-page.jpg'

const Page = () => {
  return (
    <Container maxW="550px" pt="10">
      <PhotosGridItem id="" title="" thumbnail={thumbHomePage}></PhotosGridItem>

      <Box borderRadius="lg" bg="grey" p={3} mb={6} align="center">
        InStyle Médica, sua saúde é o nosso objetivo.
      </Box>
      <Box display={{ md: 'flex' }}></Box>
      <Box flexGrow={1}>
        <Heading>InStyle Médica</Heading>
        <p>Conglomerado médico</p>
      </Box>

      <Heading as="h3" variant="section-title">
        Sobre
      </Heading>
      <Paragraph>
        A InStyle Médica é uma empresa cooperativista na área de saúde e
        pesquisa tecnológica no Brasil. Tem umas das maiores redes de assitência
        médica do Brasil. A empresa nasceu em 2009 com o objetivo de projetar
        uma vacina para o pândemia de H1N1 que assolou o povo brasileiro e hoje
        existem 100 cooperativas médicas, que prestam assitência para mais de 3
        milhões de clientes e para 10 mil empresas em todo país.
      </Paragraph>
      <Paragraph>
        Referência em tratamento viral, a rede colaborativa da empresa conta com
        mais de 80 mil profissionais, com 50 hospitais credenciados, além de
        pronto-atendimentos, laboratórios, ambulâncias e uma faculdade. Agende
        uma <NextLink href="/scheduling" />
        <Link>consulta</Link>.
      </Paragraph>
      <Box align="center" my={4} p={4}>
        <NextLink href="/scheduling" />
        <Button rightIcon={<ChevronRightIcon />} colorScheme="teal" p={8}>
          Agendamento
        </Button>
      </Box>

      <Heading as="h3" variant="section-title">
        Missão
      </Heading>
      <Paragraph>
        Servir um atendimento médico seguro, eficiênte e rápido, num ambiente
        limpo e agradável.
      </Paragraph>

      <Heading as="h3" variant="section-title">
        Valores
      </Heading>
      <Paragraph>
        Buscamos a satisfação do cliente, portanto, acreditamos ser valoroso o
        respeito às pessoas.
      </Paragraph>

      <Heading as="h3" variant="section-title">
        Histórico e realizações
      </Heading>
      <AboutSection>
        <AboutYear>2009</AboutYear>A InStyle Medica é criada por dois médicos
        premiados na área de virologia.
      </AboutSection>
      <AboutSection>
        <AboutYear>2010</AboutYear>
        Ganha prêmio por um bom serviço a comunidade.
      </AboutSection>
      <AboutSection>
        <AboutYear>2012</AboutYear>
        Estabelece pelo menos uma unidade em cada estado brasileiro.
      </AboutSection>
      <AboutSection>
        <AboutYear>2018</AboutYear>
        Cria a faculdade de medicina, além do oferecer mestrado nas áreas de
        Saúde Pública, Medicina molecular e Engenharia Biomédica.
      </AboutSection>
      <AboutSection>
        <AboutYear>2022</AboutYear>
        Continua o serviço por todo o Brasil com uma visão expansionista para o
        mundo.
      </AboutSection>
    </Container>
  )
}

export default Page
