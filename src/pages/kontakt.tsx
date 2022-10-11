import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import { Flex, Box, Heading, Text, Link } from '@chakra-ui/react'

import Layout from '@/components/layout'
import Hero from '@/components/hero'

const Contact: NextPage = () => {
  return (
    <>
      <Head>
        <title>Kontakt | Tanja Senghaas</title>
        <meta name="Kontakt | Tanja Senghaas" content="Treten Sie mit Tanja Senghaas über e-Mail oder Social Media Kanäle in Kontakt." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Hero url="/assets/portrait/tanja-senghaas-portrait-kontakt.jpg" alt='tanja-senghaas-portrait-kontakt' height='50vh'/>
        <Flex direction={{ base: 'column', md: 'row' }} justify={{ base: 'left', md: 'space-between' }}>
          <Box>
            <Heading fontSize='lg' mt={20} mb={10}>Kontakt</Heading>
            <Heading fontSize='md' fontWeight={900} mb={5}>Tanja Senghaas Designs</Heading>
            <Text fontSize='sm' fontStyle='italic'>Workspace</Text>
            <Link href='https://maps.google.com' isExternal><Text fontSize='sm' >Horandstieg 30, 22559 Hamburg</Text></Link>
            <Link href='mailto:tanja.senghaas@web.de'><Text fontSize='sm' >tanja.senghaas@web.de</Text></Link>
            <Link href='tel:+4915122543476'><Text fontSize='sm' >+49 (0) 151 22543476</Text></Link>
          </Box>
          <Box>
            <Heading fontSize='lg' mt={20} mb={10}>Danke!</Heading>
            <Heading fontSize='md' fontWeight={900}>Nele Martensen</Heading>
            <Text mb={5}>für die schönen Fotos dieser Website</Text>
            <Link href='https://www.nele-martensen.de' isExternal><Text fontSize='sm' >nele-martensen.de</Text></Link>
            <Link href='mailto:mail@nele-martensen.de'><Text fontSize='sm' >mail@nele-martensen.de</Text></Link>
            <Link href='tel:+491717872315'><Text fontSize='sm' >+49 (0) 171 7872315</Text></Link>

            <Heading fontSize='md' fontWeight={900} mt={20}>Mika Senghaas</Heading>
            <Text mb={5}>für die Erstellung meiner Website</Text>
            <Link href='https://www.jonas-mika.de' isExternal><Text fontSize='sm' >jonas-mika.de</Text></Link>
            <Link href='mailto:contact@jonas-mika.de'><Text fontSize='sm' >contact@jonas-mika.de</Text></Link>
            <Link href='tel:+4560740477'><Text fontSize='sm' >+45 60740477</Text></Link>
          </Box>
        </Flex>
      </Layout>
    </>
  )
}

export default Contact
