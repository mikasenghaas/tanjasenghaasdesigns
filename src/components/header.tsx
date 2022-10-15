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
  Box,
  useColorMode,
  useColorModeValue
} from "@chakra-ui/react";
import { ArrowLeftIcon, ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

import PageContainer from "@/components/page-container";
import Banner from "@/components/banner";
import ColorSwitch from '@/components/color-switch';
import { MotionBox, MotionFlex, MotionIconButton, MotionHeading } from '@/components/motion'

import useWindowDimensions from "@/lib/useWindowSize";
import { useResponsiveFontSize } from '@/lib/responsive'
import { capitalise, routeToMenuItem } from "@/lib/helpers"
import useThemeColors from '@/lib/useThemeColors';

import { AnimatePresence } from 'framer-motion'

function Navbar() {
  const { reversePrimary, secondary, tertiary, headerBgColor } = useThemeColors()
  const { width } = useWindowDimensions();
  const menuItems: string[] = ['projekte', 'angebot', 'vita', 'kontakt']
  const router = useRouter()

  const [focused, setFocused] = useState<string>('')
  const [selected, setSelected] = useState<string>(routeToMenuItem(router.pathname, menuItems))


  useEffect(() => {
    if (router.pathname === '/') {
      setSelected('')
    }

  }, [router.pathname])

  const { colorMode, toggleColorMode } = useColorMode()
  const oppositeColorMode = useColorModeValue('dark', 'light')
  const SwitchIcon = useColorModeValue(MoonIcon, SunIcon)

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
      <Flex onMouseLeave={() => setFocused('')} alignItems='center'>
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
                bgColor={tertiary}
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
                    bgColor={tertiary}
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
                    bgColor={tertiary}
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
        <Flex
          position='relative'
          h={8}
          w={8}
          alignItems='center'
          justifyContent='center'
          _hover={{ cursor: 'pointer' }}
          onMouseEnter={() => setFocused('color-switch')}
          aria-label={`Switch to ${oppositeColorMode} mode`}
          onClick={toggleColorMode}
        >
          <AnimatePresence exitBeforeEnter initial={false}>
            <MotionFlex
              key={colorMode}
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 10, opacity: 0 }}
              transition={{ duration: 0.3 }}
              alignItems='center'
              justifyContent='center'
            >

              <SwitchIcon h={3} />
            </MotionFlex>
          </AnimatePresence>
          {focused === 'color-switch' &&
            <MotionBox
              position='absolute'
              top='-5%'
              left='-5%'
              h='110%'
              w='110%'
              bgColor={tertiary}
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
        </Flex>
      </Flex >
    )
  } else {
    return (
      <Flex>
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Menu Options"
            icon={<HamburgerIcon />}
            bgColor={tertiary}
            _hover={{ bgColor: secondary }}
            color={reversePrimary}
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
        <AnimatePresence exitBeforeEnter initial={false}>
          <MotionIconButton
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ duration: 0.1 }}
            key={colorMode}
            aria-label={`Switch to ${oppositeColorMode} mode`}
            marginLeft="2"
            bgColor={tertiary}
            _hover={{ bgColor: secondary }}
            color={reversePrimary}
            onClick={toggleColorMode}
            icon={<SwitchIcon />}
          />
        </AnimatePresence>
      </Flex>

    )
  }
}

export default function Header() {
  const { xl } = useResponsiveFontSize()
  const { headerBgColor } = useThemeColors()

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
      bg={headerBgColor}
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
    </Banner >
  );
};
