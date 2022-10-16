import { Flex } from '@chakra-ui/react'

import PageContainer from '@/components/page-container'
import Banner from '@/components/banner'
import useThemeColors from '@/hooks/use-theme-colors'
import useWindowDimensions from '@/hooks/use-window-size'

import { Logo } from './logo'
import { NavbarDesktop, NavbarMobile } from './navbar'

const Header = () => {
  const { width } = useWindowDimensions()
  const { headerBgColor } = useThemeColors()

  return (
    <Banner
      id="top"
      position="fixed"
      top={0}
      height={20}
      bg={headerBgColor}
      backdropFilter="blur(10px)"
      zIndex={100}
    >
      <PageContainer h="100%">
        <Flex h="100%" alignItems="center" justifyContent="space-between">
          <Logo />
          {width > 800 ? <NavbarDesktop /> : <NavbarMobile />}
        </Flex>
      </PageContainer>
    </Banner>
  )
}

export default Header
