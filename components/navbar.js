import Logo from './logo'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'

const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href
  return (
    <NextLink href={href} scroll={false}>
      <Box
        p={2}
        bg={active ? 'grassTeal' : undefined}
        target={target}
        borderRadius={5}
        _hover={{
          backgroundColor: useColorModeValue('white', 'gray'),
          transition: '0.3s'
        }}
        color={useColorModeValue('gray.800', 'whiteAlpha.900')}
        {...props}
      >
        {children}
      </Box>
    </NextLink>
  )
}

const NavBar = props => {
  const { path } = props

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40, #20202380')}
      style={{ backdropFilter: 'blur(10px)' }}
      zIndex={2}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>

        <Box>
          <Stack
            direction={{ base: 'column', md: 'row' }}
            display={{ base: 'none', md: 'flex' }}
            width={{ base: 'full', md: 'auto' }}
            alignItems="center"
            flexGrow={1}
            mt={1}
          >
            <LinkItem href="/photos" path={path}>
              Fotos
            </LinkItem>
            <LinkItem href="/address" path={path}>
              Novo endereço
            </LinkItem>
            <LinkItem href="http://localhost:3001" path={path}>
              Agendamento
            </LinkItem>
            <LinkItem href="http://localhost:3002" path={path}>
              Login
            </LinkItem>
          </Stack>
        </Box>
        <Box mt={1} flex={1} align="right">
          <ThemeToggleButton />
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              ></MenuButton>
              <MenuList>
                <MenuItem href="/" passhref as={LinkItem}>
                  Sobre
                </MenuItem>
                <MenuItem href="/photos" passhref as={LinkItem}>
                  Fotos
                </MenuItem>
                <MenuItem href="/address" passhref as={LinkItem}>
                  Novo endereço
                </MenuItem>
                <MenuItem href="/scheduling" passhref as={LinkItem}>
                  Agendamento
                </MenuItem>
                <MenuItem href="/login" passhref as={LinkItem}>
                  Login
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default NavBar
