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
import { useResponsiveFontSize } from '@/lib/responsive'
import { capitalise } from "@/lib/helpers"
import theme from "@/lib/theme"

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
  const { md, lg } = useResponsiveFontSize();

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
            <Box _hover={{ cursor: 'pointer' }} role='group'>
              <Heading fontSize={lg} _groupHover={{ color: 'green' }}>Tanja Senghaas Designs</Heading>
              <Text fontSize={md} >Kreativdirektion | Magazinentwicklung</Text>
            </Box>
          </Link>
          <Navbar />
        </Flex>
      </PageContainer>
    </Banner >
  );
};
