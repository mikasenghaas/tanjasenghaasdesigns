import '@fontsource/montserrat'
import { useState, useEffect } from 'react'
import { ChakraProvider, Heading } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { useAnimation } from 'framer-motion'

import Hero from '@/components/hero'
import Header from '@/components/header'
import Layout from '@/components/layout'
import Footer from '@/components/footer'
import { MotionFlex } from '@/components/motion'

import theme from '@/lib/theme'

function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const controls = useAnimation()

  useEffect(() => {
    if (router.pathname === '/') {
      controls.start({
        y: "90vh",
        transition: { type: "ease-out", duration: .3 },
      })
    } else {
      controls.start({
        y: 0,
        transition: { type: "ease-out", duration: .3 },
      })

    }
  }, [controls, router.pathname])


  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Hero url='/assets/hero/index.jpg' alt='hero-image' />
      <MotionFlex
        animate={controls}
        direction='column'
        minHeight='100vh'
        bgColor='white'
        borderRadius='20px 20px 0 0'
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <Footer />
      </MotionFlex>
    </ChakraProvider >
  )
}

export default App
