import { Box, Flex } from '@chakra-ui/react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import PageContainer from '@/components/page-container'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <PageContainer>
      <Flex direction='column' minHeight='100vh'>
        <Header />
        <main>
          <Box mt='10%'>
            {children}
          </Box>
        </main>
        <Footer />
      </Flex>
    </ PageContainer>
  )
}
