import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  IconButton
} from "@chakra-ui/react";
import Link from 'next/link'
import { ArrowLeftIcon, HamburgerIcon } from "@chakra-ui/icons";

import PageContainer from "@/components/page-container";
import Banner from "@/components/banner";
import { MotionBox, MotionFlex, MotionHeading } from '@/components/motion'

import useWindowDimensions from "@/lib/useWindowSize";
import { useResponsiveFontSize } from '@/lib/responsive'
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
              <Link href={`/${menuItem}`} key={menuItem}>
                <Button variant='link' color='black' mx={3} >
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
          icon={<HamburgerIcon />}
          variant="outline"
        />
        <MenuList my={2}>
          {
            menuItems.map((menuItem: string) => {
              return (
                <Link href={`${menuItem}`} key={menuItem}>
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
  const logoAnimation = {
    rest: {
      transform: 'translateX(-17px)',
    },
    hover: {
      transform: 'translateX(0px)',
      transition: {
        when: "afterChildren"
      }
    }
  }
  const colorGreen = {
    rest: { color: 'black' },
    hover: { color: 'green' }
  }
  const { md, lg } = useResponsiveFontSize();

  return (
    <Banner
      position="fixed"
      zIndex={100}
      bg="whiteAlpha.50"
      height={20}
      backdropFilter="blur(10px)"
    >
      <PageContainer h="100%">
        <Flex h="100%" alignItems="center" justifyContent="space-between">
          <Link href="/">
            <MotionBox _hover={{ cursor: 'pointer' }} initial='rest' whileHover='hover' overflow='hidden'>
              <MotionFlex variants={logoAnimation} alignItems='center'>
                <ArrowLeftIcon h={3} />
                <MotionHeading fontSize={lg} ml='2px'>Tanja Senghaas Designs</MotionHeading>
              </MotionFlex>
              <Text fontSize={md} >Kreativdirektion | Magazinentwicklung</Text>
            </MotionBox>
          </Link>
          <Navbar />
        </Flex>
      </PageContainer>
    </Banner >
  );
};
