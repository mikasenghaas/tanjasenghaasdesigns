import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import { Flex, Box, Heading, Text, Link } from '@chakra-ui/react'

import Layout from '@/components/layout'
import Hero from '@/components/hero'

import { useResponsiveFontSize } from '@/lib/responsive'

const Contact: NextPage = () => {
  const { md, lg } = useResponsiveFontSize()

  return (
    <>
      <Head>
        <title>Kontakt | Tanja Senghaas</title>
        <meta name="Kontakt | Tanja Senghaas" content="Treten Sie mit Tanja Senghaas über e-Mail oder Social Media Kanäle in Kontakt." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Hero url="/assets/portrait/tanja-senghaas-portrait-kontakt.jpg" alt='tanja-senghaas-portrait-kontakt' height='100vh'/>
        <Flex direction={{ base: 'column', md: 'row' }} justify={{ base: 'left', md: 'space-between' }}>
          <Box>
            <Heading fontSize={lg} mt={20} mb={10}>Kontakt</Heading>
            <Heading fontSize={lg} fontWeight={900} mb={5}>Tanja Senghaas Designs</Heading>
            <Text fontSize={md} fontStyle='italic'>Workspace</Text>
            <Link href='https://maps.google.com' isExternal><Text fontSize={md} >Horandstieg 30, 22559 Hamburg</Text></Link>
            <Link href='mailto:tanja.senghaas@web.de'><Text fontSize={md} >tanja.senghaas@web.de</Text></Link>
            <Link href='tel:+4915122543476'><Text fontSize={md} >+49 (0) 151 22543476</Text></Link>
          </Box>
          <Box>
            <Heading fontSize={lg} mt={20} mb={10}>Danke!</Heading>
            <Heading fontSize={lg} fontWeight={900}>Nele Martensen</Heading>
            <Text mb={5} fontSize={md}>für die schönen Fotos dieser Website</Text>
            <Link href='https://www.nele-martensen.de' isExternal><Text fontSize={md} >nele-martensen.de</Text></Link>
            <Link href='mailto:mail@nele-martensen.de'><Text fontSize={md} >mail@nele-martensen.de</Text></Link>
            <Link href='tel:+491717872315'><Text fontSize={md} >+49 (0) 171 7872315</Text></Link>

            <Heading fontSize={lg} fontWeight={900} mt={20}>Mika Senghaas</Heading>
            <Text mb={5} fontSize={lg}>für die Erstellung meiner Website</Text>
            <Link href='https://www.jonas-mika.de' isExternal><Text fontSize={md} >jonas-mika.de</Text></Link>
            <Link href='mailto:contact@jonas-mika.de'><Text fontSize={md} >contact@jonas-mika.de</Text></Link>
            <Link href='tel:+4560740477'><Text fontSize={md} >+45 60740477</Text></Link>
          </Box>
        </Flex>
      </Layout>
    </>
  )
}

export default Contact
