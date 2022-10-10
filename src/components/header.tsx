import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Link as ChakraLink
} from "@chakra-ui/react";
import Link from 'next/link'
// import { GiHamburgerMenu } from "react-icons/gi";

import PageContainer from "@/components/page-container";
import Banner from "@/components/banner";

import useWindowDimensions from "@/lib/useWindowSize";
import { capitalise } from "@/lib/helpers"

function Navbar() {
  // const { width } = useWindowDimensions();
  const menuItems: string[] = ['projekte', 'angebot', 'vita', 'kontakt']

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
}

export default function Header() {

  return (
    <Banner
      position="fixed"
      zIndex={100}
      bg="blackAlpha.50"
      height="75px"
      backdropFilter="blur(10px)"
    >
      <PageContainer>
        <Flex height="75px" alignItems="center" justifyContent="space-between">
          <Link href="/">
            <Box>
              <ChakraLink>
                <Heading fontSize='lg'>Tanja Senghaas Designs</Heading>
              </ChakraLink>
              <Text fontSize='sm' >Kreativdirektion | Magazinentwicklung</Text>
            </Box>
          </Link>
          <Navbar />
        </Flex>
      </PageContainer>
    </Banner>
  );
};
