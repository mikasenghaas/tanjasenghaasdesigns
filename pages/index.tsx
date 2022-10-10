import type { NextPage } from 'next'
import Head from 'next/head'

import { Box, Heading } from '@chakra-ui/react'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Tanja Senghaas</title>
        <meta name="Tanja Senghaas Designs" content="Creative Direction" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box>
        <Heading>Tanja Senghaas Designs.</Heading>
      </Box>

    </>
  )
}

export default Home
