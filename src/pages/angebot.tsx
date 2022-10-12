import type { NextPage } from 'next'
import Head from 'next/head'

import {
  Flex,
  Box,
  Grid,
  GridItem,
  Heading,
  Text
} from '@chakra-ui/react'
import Layout from '@/components/layout'

import serviceItems, { Service } from '@/models/services'
import philosphyItems, { Philosophy } from '@/models/philosophy'
import { useResponsiveFontSize } from '@/lib/responsive'

const Angebot: NextPage = () => {
  const { md, lg } = useResponsiveFontSize();

  return (
    <>
      <Head>
        <title>Angebot | Tanja Senghaas</title>
        <meta name="Angebot | Tanja Senghaas Designs" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout heroUrl='/assets/hero/vita.jpg'>
        <Flex pt={20} direction='column'>
          <Flex direction='column' alignItems='flex-end'>
            <Heading fontSize={lg} mb={5} >Meine Philosophie</Heading>
            {
              philosphyItems.map((philosophy: Philosophy, i: number) => {
                return (
                  <Box key={i} maxWidth={600} my={5} textAlign='right'>
                    <Heading fontSize={md} mb={1}>{philosophy.name}</Heading>
                    {philosophy.description.map((line: string, i: number) => <Text fontSize={md} key={i}>{line}</Text>)}
                  </Box>
                )
              })
            }
          </Flex>
          <Box mt={20}>
            <Heading fontSize={lg} mb={5}>Angebot</Heading>
            <Grid templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }} gap={5} mt={10}>
              {
                serviceItems.map((service: Service, i: number) => {
                  return (
                    <GridItem key={i}>
                      <Heading fontSize={md} mb={1}>{service.name}</Heading>
                      <Text fontSize={md}>{service.description}</Text>
                    </GridItem>
                  )
                })
              }
            </Grid>
          </Box>
        </Flex>
      </Layout>
    </>
  )
}

export default Angebot
