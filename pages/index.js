import { Container, Box, Heading, Link, Button, chakra, SimpleGrid } from "@chakra-ui/react"
import Section from '../components/section'
import Paragraph from "../components/paragraph"
import NextLink from "next/link"
import { ChevronRightIcon } from "@chakra-ui/icons"
import { AboutSection, AboutYear } from "../components/about"
import Image from 'next/image'
import { PhotosGridItem } from "../components/grid-item";
import thumbHomePage from '../public/images/contents/home-page.jpg'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt', 'max-width', 'max-height'].includes(prop)
})

const Page = () => {
  return (<Container>
            <SimpleGrid columns={[1,1,1]} gap={6}>
                <Section>
                    <PhotosGridItem id="" title="" thumbnail={thumbHomePage}>
                    </PhotosGridItem>
                </Section>
              </SimpleGrid>
            <Box borderRadius="lg" bg="grey" p={3} mb={6} align="center">
              InStyle Médica, sua saúde é o nosso objetivo.
            </Box>
            <Box display={{md: 'flex'}}>

            </Box>  
            <Box flexGrow={1}>
              <Heading>InStyle Médica</Heading>
              <p>Clínica Médica</p>
            </Box>
            <Section delay={0.1}>
              <Heading as = "h3" variant='section-title'>
                Sobre
              </Heading>
                <Paragraph>A InStyle Médica é uma empresa cooperativista na área de saúde e pesquisa tecnológica no Brasil. Tem umas das maiores redes de assitência médica do Brasil.
                A empresa nasceu em 2009 com o objetivo de projetar uma vacina para o pândemia de H1N1 que assolou o povo brasileiro, e hoje existem 100 cooperativas médicas, que prestam 
                assitência para mais de 3 milhões de clientes e para 10 mil empresas em todo país.
                </Paragraph>
                <Paragraph>Referência em tratamento viral, a rede colaborativa da empresa conta com mais de 80 mil profissionais, com 1024 hospitais credenciados, além de proto-atendimentos, laboratórios, ambulâncias e uma faculdade.
                  Agende uma <NextLink href = "/scheduling" /><Link>consulta</Link>.
                </Paragraph>
                <Box align="center" my={4} p={4}>
                  <NextLink href="/scheduling" />
                  <Button rightIcon = {<ChevronRightIcon />} colorScheme="teal" p={8}>
                    Agendamento 
                  </Button>
                </Box>
            </Section>
            <Section delay={0.2}>
              <Heading as = "h3" variant='section-title'>
                Missão
              </Heading>
                <Paragraph>Servir um atendimento médico seguro, eficiênte e rápido, num ambiente limpo e agradável.
                </Paragraph>
            </Section>
            <Section delay={0.3}>
              <Heading as = "h3" variant='section-title'>
                Valores
              </Heading>
                <Paragraph>Buscamos a satisfação do cliente, portanto, acreditamos ser valoroso o respeito às pessoas. 
                </Paragraph>
            </Section>
            <Section delay = {0.4}>
              <Heading as = "h3" variant="section-title">
                Histórico e realizações
              </Heading>
              <AboutSection>
                <AboutYear>2009</AboutYear>
                A InStyle Medica é criada por dois médicos premiados na área de virologia.
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
                Cria a faculdade de medicina, além do oferecer mestrado nas áreas de Saúde Pública, Medicina molecular e Engenharia Biomédica.
              </AboutSection>
              <AboutSection>
              <AboutYear>2022</AboutYear>
                Continua o serviço por todo o Brasil com uma visão expansionista para o mundo. 
              </AboutSection>
            </Section>
          </Container>
  )
}

export default Page
