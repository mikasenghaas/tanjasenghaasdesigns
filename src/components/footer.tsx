import NextLink from 'next/link'
import { Box, Flex, Text, Link, Divider } from '@chakra-ui/react'

import PageContainer from '@/components/page-container'
import useResponsiveFontSizes from '@/hooks/use-responsive-font-sizes'
import useThemeColors from '@/hooks/use-theme-colors'

export default function Footer() {
  const { xs } = useResponsiveFontSizes()
  const { secondary } = useThemeColors()
  return (
    <Box mt="auto" pt={20}>
      <PageContainer>
        <Divider />
          <Flex direction="column" justifyContent="center" alignItems="center" minHeight={10} my={3}>
            <Text fontSize={xs} color={secondary} textAlign="center">
              &copy; Tanja Senghaas, 2022
            </Text>
            <Box fontSize={xs} color={secondary}>
              <NextLink href='/impressum' passHref >
                <Link mr={1}>Impressum</Link>
              </NextLink>
              <NextLink href='/datenschutz' passHref>
                <Link ml={1}>Datenschutz</Link>
              </NextLink>
            </Box>
          </Flex>
      </PageContainer>
    </Box>
  )
}
