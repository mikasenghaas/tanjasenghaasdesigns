import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {
  Flex,
  Text,
  Link as ChakraLink,
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  IconButton,
  Box
} from "@chakra-ui/react";
import { ArrowLeftIcon, ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";

import PageContainer from "@/components/page-container";
import Banner from "@/components/banner";
import { MotionBox, MotionFlex, MotionHeading } from '@/components/motion'

import useWindowDimensions from "@/lib/useWindowSize";
import { useResponsiveFontSize } from '@/lib/responsive'
import { capitalise, routeToMenuItem } from "@/lib/helpers"

function Navbar() {
  const menuItems: string[] = ['projekte', 'angebot', 'vita', 'kontakt']
  const router = useRouter()

  const [focused, setFocused] = useState<string>('')
  const [selected, setSelected] = useState<string>(routeToMenuItem(router.pathname, menuItems))

  const { width } = useWindowDimensions();

  useEffect(() => {
    if (router.pathname === '/') {
      setSelected('')
    }

  }, [router.pathname])


  const anchorLink = async (id: string) => {
    if (router.pathname !== '/') {
      await router.push('/')
    }
    const scrollY = window.scrollY
    const clientY = document.querySelector(`#${id}`)?.getBoundingClientRect().top
    if (scrollY !== undefined && clientY !== undefined) {
      window.scrollTo({
        top: scrollY + clientY - 80,
        behavior: 'smooth',
      })
    }
  }

  if (width > 800) {
    return (
      <Flex onMouseLeave={() => setFocused('')}>
        <Menu>
          <MenuButton
            mx={2}
            position='relative'
            onMouseEnter={() => setFocused('projekte')}
            onFocus={() => setFocused('projekte')}
          >
            {focused === 'projekte' &&
              <MotionBox
                position='absolute'
                top='-20%'
                left='-10%'
                h='140%'
                w='120%'
                bgColor='blackAlpha.200'
                borderRadius={5}
                zIndex={-1}
                transition={{
                  layout: {
                    duration: 0.3,
                    ease: 'easeOut',
                  },
                }}
                layoutId='highlight'
              />
            }
            <Flex alignItems='center' mx={2}>
              <ChevronDownIcon />
              <Text>Projekte</Text>
            </Flex>
          </MenuButton>
          <MenuList>
            <MenuItem onClick={() => anchorLink('magazines')}>
              Magazinentwicklung
            </MenuItem>
            <MenuItem onClick={() => anchorLink('corporate')}>
              Corporate Design
            </MenuItem>
            <MenuItem onClick={() => anchorLink('typography')}>
              Typografie
            </MenuItem>
          </MenuList>
        </Menu>
        {
          menuItems.slice(1, menuItems.length).map((menuItem: string) => {
            return (
              <Box
                position='relative'
                key={menuItem}
                mx={2}
                onMouseEnter={() => setFocused(menuItem)}
                onFocus={() => setFocused(menuItem)}
                onClick={() => setSelected(menuItem)}
              >
                <Link href={`/${menuItem}`} passHref>
                  <ChakraLink _hover={{ textDecoration: 'none' }}>
                    {capitalise(menuItem)}
                  </ChakraLink>
                </Link>
                {focused === menuItem &&
                  <MotionBox
                    position='absolute'
                    top='-20%'
                    left='-10%'
                    h='140%'
                    w='120%'
                    bgColor='blackAlpha.200'
                    borderRadius={5}
                    zIndex={-2}
                    transition={{
                      layout: {
                        duration: 0.3,
                        ease: 'easeOut',
                      },
                    }}
                    layoutId='highlight'
                  />
                }
                {selected === menuItem &&
                  <MotionBox
                    position='absolute'
                    top='-20%'
                    left='-10%'
                    h='140%'
                    w='120%'
                    bgColor='gray.100'
                    borderRadius={5}
                    zIndex={-1}
                    transition={{
                      layout: {
                        duration: 0.3,
                        ease: 'easeOut',
                      },
                    }}
                    layoutId='selected'
                  />
                }
              </Box>
            )
          })
        }
      </Flex >
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
          <MenuItem onClick={() => anchorLink('magazines')}>
            Magazinentwicklung
          </MenuItem>
          <MenuItem onClick={() => anchorLink('corporate')}>
            Corporate Design
          </MenuItem>
          <MenuItem onClick={() => anchorLink('typography')}>
            Typografie
          </MenuItem>
          {
            menuItems.slice(1, menuItems.length).map((menuItem: string) => {
              return (
                <Link href={`${menuItem}`} key={menuItem} >
                  <MenuItem key={menuItem}>
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
  const { md, xl } = useResponsiveFontSize()

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

  return (
    <Banner
      position="fixed"
      top={0}
      zIndex={100}
      bg="whiteAlpha.200"
      height={20}
      backdropFilter="blur(10px)"
    >
      <PageContainer h="100%">
        <Flex h="100%" alignItems="center" justifyContent="space-between">
          <Link href="/" >
            <MotionBox _hover={{ cursor: 'pointer' }} initial='rest' whileHover='hover' overflow='hidden'>
              <MotionFlex variants={logoAnimation} alignItems='center'>
                <ArrowLeftIcon h={3} />
                <Flex>
                  <MotionHeading fontSize={xl} fontWeight={800} ml='2px'>Tanja Senghaas Designs.</MotionHeading>
                </Flex>
              </MotionFlex>
            </MotionBox>
          </Link>
          <Navbar />
        </Flex>
      </PageContainer>
    </Banner>
  );
};
