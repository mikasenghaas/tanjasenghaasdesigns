import type { NextPage } from 'next'
import Head from 'next/head'

import { Heading } from '@chakra-ui/react'
import Layout from '@/components/layout'

const Angebot: NextPage = () => {
  return (
    <>
      <Head>
        <title>Angebot | Tanja Senghaas</title>
        <meta name="Angebot | Tanja Senghaas Designs" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Heading>Angebot</Heading>
      </Layout>
    </>
  )
}

export default Angebot
