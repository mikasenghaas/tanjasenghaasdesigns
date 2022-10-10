import type { NextPage } from 'next'
import Head from 'next/head'

import { Heading } from '@chakra-ui/react'
import Layout from '@/components/layout'

const Projekte: NextPage = () => {
  return (
    <>
      <Head>
        <title>Projekte | Tanja Senghaas</title>
        <meta name="Projekte | Tanja Senghaas Designs" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Heading>Projekte</Heading>
      </Layout>
    </>
  )
}

export default Projekte
