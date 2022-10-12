import '@fontsource/montserrat'
import { ChakraProvider, Flex } from '@chakra-ui/react'
import type { AppProps } from 'next/app'

import Header from '@/components/header'
import Footer from '@/components/footer'

import theme from '@/lib/theme'

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Flex minHeight='100vh' direction='column' >
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Flex>
    </ChakraProvider>
  )
}

export default App
