import type { NextPage } from 'next'
import Head from 'next/head'

import { Flex, Box, Heading, Text } from '@chakra-ui/react'

import Layout from '@/components/layout'
import Hero from '@/components/hero'
import { useResponsiveFontSize } from '@/lib/responsive'

import vitaItems, { VitaItem } from '@/models/vita'
import customers, { Customer } from '@/models/customers'

const VitaEntry = ({ vitaItem }: { vitaItem: VitaItem }) => {
  const { sm, md } = useResponsiveFontSize()

  return (
    <Flex mb={5} maxWidth='90%'>
      <Box flex={1}>
        <Flex>
          {vitaItem.startDate &&
            <Text fontSize={md} fontStyle='italic'>{vitaItem.startDate.getFullYear()}</Text>
          }
          {vitaItem.endDate &&
            <Text fontSize={md} fontStyle='italic'>-</Text>
          }
        </Flex>
        <Text fontSize={md} fontStyle='italic'> {vitaItem.endDate?.getFullYear()}</Text>
      </Box>
      <Box flex={5}>
        <Text fontWeight={600} fontSize={md}>{vitaItem.title}</Text>
        {vitaItem.description?.map((line: string, i: number) => <Text key={i} fontSize={md}>{line}</Text>)}
      </Box>
    </Flex>
  )
}

const Vita: NextPage = () => {
  const { md, lg } = useResponsiveFontSize()

  return (
    <>
      <Head>
        <title>Vita | Tanja Senghaas</title>
        <meta name="Vita | Tanja Senghaas Designs" content="Tanja Senghaas ist eine deutsche Grafikdesignern und Artdirektiorin mit einer Spezialisierung auf Magazindesignentwicklung" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Hero url='/assets/portrait/tanja-senghaas-portrait-vita.jpg' alt='portrait-tanja-senghaas' height='100vh' />
        <Flex direction={{ base: 'column-reverse', md: 'row' }}>
          <Box flex={2}>
            <Flex maxWidth='90%'>
              <Box flex={1} />
              <Heading flex={5} fontSize={lg} mt={20} mb={5}>Vita</Heading>
            </Flex>
            {
              vitaItems.map((vitaItem: VitaItem, i: number) => {
                return (
                  <VitaEntry key={i} vitaItem={vitaItem} />
                )
              })

            }
          </Box>
          <Flex flex={1} direction='column' alignItems='flex-end'>
            <Heading fontSize={lg} mt={20} mb={5} textAlign={{ base: 'left', md: 'right' }}>Ausgewählte Kunden</Heading>
            {customers.map((customer: Customer) => {
              return (
                <Text key={customer.name} fontSize={md} textAlign={{ base: 'left', md: 'right' }}>
                  {customer.name}, {customer.location}
                </Text>)
            })
            }
          </Flex>
        </Flex>
      </Layout>
    </>
  )
}

export default Vita
