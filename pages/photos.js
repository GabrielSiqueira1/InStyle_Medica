import { Container, Box, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import Section from '../components/section'
import { PhotosGridItem } from "../components/grid-item";
import thumbPhotos from '../public/images/photos/recepcao.jpg'
import thumbPesquisa from '../public/images/photos/pesquisa.jpg'


const Photos = () => {
    return (
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Fotos
            </Heading>

            <SimpleGrid columns={[1,1,2]} gap={6}>
                <Section>
                    <PhotosGridItem id="recepcao" title="Atendimento" thumbnail={thumbPhotos}>
                        Recepção da InStyle Médica na filial de São Paulo.
                    </PhotosGridItem>
                </Section>
                <Section>
                    <PhotosGridItem id="pesquisa" title="Pesquisadora" thumbnail={thumbPesquisa}>
                        Pesquisa para a vacina da H1N1.
                    </PhotosGridItem>
                </Section>
            </SimpleGrid>
            
        </Container>
    )
}

export default Photos