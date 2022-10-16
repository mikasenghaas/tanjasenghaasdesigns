import { useState, useEffect } from 'react'
import { NextRouter, useRouter } from 'next/router'
import NextLink from 'next/link'
import {
  Flex,
  Text,
  Link,
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  Box,
} from "@chakra-ui/react";
import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";
import { MotionFlex } from '@/components/motion'

import { capitalise, anchorLink, routeToMenuItem } from "@/lib/helpers"

import { ColorSwitch } from './color-switch';
import { Selected } from './selected'
import { Focus } from './focus'

export function NavbarDesktop() {
  const router = useRouter()

  const menuItems: string[] = ['projekte', 'angebot', 'vita', 'kontakt']

  const [focused, setFocused] = useState<string>('')
  const [selected, setSelected] = useState<string>(routeToMenuItem(router.pathname, menuItems))

  useEffect(() => {
    if (router.pathname === '/') {
      setSelected('')
    }
  }, [router.pathname])

  return (
    <Flex onMouseLeave={() => setFocused('')} alignItems='center'>
      <Menu>
        <MenuButton
          position='relative'
          onFocus={() => setFocused('projekte')}
          onMouseEnter={() => setFocused('projekte')}
          h={6}
          mx={3}
        >
          <MotionFlex alignItems='center' >
            <ChevronDownIcon />
            <Text>Projekte</Text>
          </MotionFlex>
          {focused === 'projekte' && <Focus />}
        </MenuButton>
        <MenuList ml={-2}>
          <MenuItem onClick={() => anchorLink('magazines', router)}>
            Magazindesign
          </MenuItem>
          <MenuItem onClick={() => anchorLink('corporate', router)}>
            Corporate Design
          </MenuItem>
          <MenuItem onClick={() => anchorLink('typography', router)}>
            Typografie
          </MenuItem>
        </MenuList>
      </Menu>
      {
        menuItems.slice(1, menuItems.length).map((menuItem: string) => {
          return (
            <MotionFlex
              key={menuItem}
              position='relative'
              alignItems='center'
              h={6}
              mx={2}
              onMouseEnter={() => setFocused(menuItem)}
              onFocus={() => setFocused(menuItem)}
              onClick={() => setSelected(menuItem)}
            >
              <NextLink href={router.pathname === `/${menuItem}` ? '/' : `/${menuItem}`} passHref>
                <Link _hover={{ textDecoration: 'none' }}>
                  {capitalise(menuItem)}
                </Link>
              </NextLink>
              {focused === menuItem && <Focus />}
              {selected === menuItem && <Selected />}
            </MotionFlex>
          )
        })
      }
      <Box
        position='relative'
        h={6}
        w={8}
        mx={2}
        alignItems='center'
        justifyContent='center'
        _hover={{ cursor: 'pointer' }}
        onMouseEnter={() => setFocused('color-switch')}
      >
        <ColorSwitch />
        {focused === 'color-switch' && <Focus />}
      </Box>
    </Flex >
  )
}

export function NavbarMobile() {
  const router = useRouter()

  const menuItems: string[] = ['menu', 'angebot', 'vita', 'kontakt', 'color-switch']

  const [focused, setFocused] = useState<string>('')

  return (
    <Flex alignItems='center'>
      <Menu>
        <MenuButton
          position='relative'
          h={7}
          w={8}
          mx={2}
          aria-label="Menu Options"

          onMouseEnter={() => setFocused('menu')}
          onFocus={() => setFocused('menu')}
        >
          <HamburgerIcon h={6} />
          {focused === 'menu' && <Focus />}
        </MenuButton>
        <MenuList my={2}>
          <MenuItem onClick={() => anchorLink('magazines', router)}>
            Magazinentwicklung
          </MenuItem>
          <MenuItem onClick={() => anchorLink('corporate', router)}>
            Corporate Design
          </MenuItem>
          <MenuItem onClick={() => anchorLink('typography', router)}>
            Typografie
          </MenuItem>
          {
            menuItems.slice(1, menuItems.length - 1).map((menuItem: string) => {
              return (
                <NextLink href={`${menuItem}`} key={menuItem} >
                  <MenuItem key={menuItem}>
                    {capitalise(menuItem)}
                  </MenuItem>
                </NextLink>
              )
            })
          }
        </MenuList>
      </Menu>

      <Box
        h={7}
        w={8}
        mx={2}
        position='relative'
        onMouseEnter={() => setFocused('color-switch')}
        onFocus={() => setFocused('color-switch')}
        _hover={{ cursor: 'pointer' }}
      >
        <ColorSwitch />
        {focused === 'color-switch' && <Focus />}
      </Box>
    </Flex>
  )
}
