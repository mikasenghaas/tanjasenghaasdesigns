import type { NextPage } from 'next'
import Head from 'next/head'

import { Heading, Text } from '@chakra-ui/react'

import Layout from '@/components/layout'

const Contact: NextPage = () => {
  return (
    <>
      <Head>
        <title>Kontakt | Tanja Senghaas</title>
        <meta name="Kontakt | Tanja Senghaas" content="Treten Sie mit Tanja Senghaas über e-Mail oder Social Media Kanäle in Kontakt." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Heading>Kontakt</Heading>
        <Text>Ich bin Tanja Senghaas</Text>
      </Layout>
    </>
  )
}

export default Contact
