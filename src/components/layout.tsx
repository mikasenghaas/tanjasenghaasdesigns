import { Box, Flex } from '@chakra-ui/react'

import Header from '@/components/header'
import Footer from '@/components/footer'
import PageContainer from '@/components/page-container'
import Hero from '@/components/hero'

interface Props {
  children: React.ReactNode,
  heroUrl: string
}
export default function Layout({ heroUrl, children }: Props) {
  return (
    <Flex direction='column' minHeight='100vh'>
      <main>
            <Header />
        <Hero url={heroUrl} alt='hero-image' />
        <Box bgColor='white'>
          <PageContainer >
            {children}
            <Footer />
          </PageContainer>
        </Box>
      </main>
    </Flex>
  )
}
