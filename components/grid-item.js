import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const GridItem = ({ children, href, title, thumbnail }) => (
    <Box w="100%" align="center">
        <LinkBox cursor="auto">
            <Image src={thumbnail} alt={title} className="grid-item-thumbnail" placeholder="blur" loading="lazy" />
            <LinkOverlay href={href} target="_blank">
                <Text mt={2}>{title}</Text>
                <Text fontSize={14}>{children}</Text>
            </LinkOverlay>
        </LinkBox>
    </Box>
)

export const PhotosGridItem = ({ children, title, id, thumbnail}) => (
    <Box w = "100%" align="center">
        <LinkBox href={`/photos/${id}`} cursor="auto">
            <Image src={thumbnail} alt={title} className="grid-item-thumbnail" placeholder='blur'/>   
            <LinkOverlay href={`/photos/${id}`}>
                <Text mt={2} fontSize={20}>{title}</Text>
            </LinkOverlay>
            <Text fontSize={14}>{children}</Text>
        </LinkBox>
    </Box>
)

export const GridItemStyle = () => (
    <Global 
        styles={`
            .grid-item-thumbnail {
                border-radius: 12px;
            }
        `}
    />
)