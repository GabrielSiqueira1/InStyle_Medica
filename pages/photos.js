import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { PhotosGridItem } from '../components/grid-item'
import thumbPhotos from '../public/images/photos/recepcao.jpg'
import thumbPesquisa from '../public/images/photos/pesquisa.jpg'
import thumbRadiologia from '../public/images/photos/radiologia.jpg'
import thumbAtendimento from '../public/images/photos/sala-atendimento.jpg'
import thumbCirurgia from '../public/images/photos/sala-cirurgia.jpg'

const Photos = () => {
  return (
    <Container pt={10}>
      <Heading as="h3" fontSize={20} mb={4}>
        Fotos
      </Heading>

      <SimpleGrid columns={[1, 1, 1]} gap={6}>
        <Section>
          <PhotosGridItem
            id="recepcao"
            title="Atendimento"
            thumbnail={thumbPhotos}
          >
            Recepção da InStyle Médica na filial de São Paulo.
          </PhotosGridItem>
        </Section>
        <Section>
          <PhotosGridItem
            id="pesquisa"
            title="Pesquisa"
            thumbnail={thumbPesquisa}
          >
            Pesquisa para a vacina da H1N1.
          </PhotosGridItem>
        </Section>
        <Section>
          <PhotosGridItem
            id="radiologia"
            title="Radiologia"
            thumbnail={thumbRadiologia}
          >
            Salas de radiologia amplas.
          </PhotosGridItem>
        </Section>
        <Section>
          <PhotosGridItem
            id="sala-atendimento"
            title="Sala de Atendimento"
            thumbnail={thumbAtendimento}
          >
            Atendimento ergonômico.
          </PhotosGridItem>
        </Section>
        <Section>
          <PhotosGridItem
            id="sala-cirurgia"
            title="Sala de Cirúrgia"
            thumbnail={thumbCirurgia}
          >
            Médicos e salas capacitadas para atendimentos diversos.
          </PhotosGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  )
}

export default Photos
