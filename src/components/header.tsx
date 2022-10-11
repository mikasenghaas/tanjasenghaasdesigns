import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Link as ChakraLink,
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  IconButton
} from "@chakra-ui/react";
import Link from 'next/link'
import { GiHamburgerMenu } from "react-icons/gi";

import PageContainer from "@/components/page-container";
import Banner from "@/components/banner";

import useWindowDimensions from "@/lib/useWindowSize";
import { capitalise } from "@/lib/helpers"

function Navbar() {
  const { width } = useWindowDimensions();
  const menuItems: string[] = ['projekte', 'angebot', 'vita', 'kontakt']

  if (width > 800) {
    return (
      <Flex>
        {
          menuItems.map((menuItem: string) => {
            return (
              <Link href={menuItem} key={menuItem}>
                <Button variant='ghost' mx={.5} >
                  {capitalise(menuItem)}
                </Button>
              </Link>
            )
          })
        }
      </Flex>
    )
  } else {
    return (
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Menu Options"
          icon={<GiHamburgerMenu />}
          variant="outline"
          colorMode="dark"
        />
        <MenuList my={2}>
          {
            menuItems.map((menuItem: string) => {
              return (
                <Link href={menuItem} key={menuItem}>
                  <MenuItem>
                    {capitalise(menuItem)}
                  </MenuItem>
                </Link>
              )
            })

          }
        </MenuList>
      </Menu>
    )
  }
}

export default function Header() {

  return (
    <Banner
      position="fixed"
      zIndex={100}
      bg="whiteAlpha.50"
      height="10%"
      backdropFilter="blur(10px)"
    >
      <PageContainer h="100%">
        <Flex h="100%" alignItems="center" justifyContent="space-between">
          <Link href="/">
            <Box>
              <ChakraLink>
                <Heading fontSize={{ base: 'md', sm: 'lg', xxl: '4xl' }}>Tanja Senghaas Designs</Heading>
              </ChakraLink>
              <Text fontSize={{ base: 'sm', sm: 'md', xxl: '2xl' }} >Kreativdirektion | Magazinentwicklung</Text>
            </Box>
          </Link>
          <Navbar />
        </Flex>
      </PageContainer>
    </Banner >
  );
};
