import type { NextPage } from 'next'
import Head from 'next/head'

import { Heading, Text } from '@chakra-ui/react'

import Layout from '@/components/layout'

const Vita: NextPage = () => {
  return (
    <>
      <Head>
        <title>Vita | Tanja Senghaas</title>
        <meta name="Vita | Tanja Senghaas Designs" content="Tanja Senghaas ist eine deutsche Grafikdesignern und Artdirektiorin mit einer Spezialisierung auf Magazindesignentwicklung" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Heading>Vita</Heading>
        <Text>This is a test</Text>
      </Layout>
    </>
  )
}

export default Vita
