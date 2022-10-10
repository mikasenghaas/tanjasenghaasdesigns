import { ChakraProvider } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'

import { Box, Heading, Text } from '@chakra-ui/react'

import theme from '@/lib/theme'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Tanja Senghaas</title>
        <meta name="Tanja Senghaas Designs" content="Creative Direction" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box>
        <Heading color='brand.900'>Tanja Senghaas Designs.</Heading>
        <Text>This is a website</Text>
      </Box>
    </>
  )
}

export default Home
