import type { NextPage } from 'next'
import Head from 'next/head'

import { Flex, Box, Heading, Text } from '@chakra-ui/react'

import Layout from '@/components/layout'
import { useResponsiveFontSize } from '@/lib/responsive'

import { vitaItems, educationItems, VitaItem } from '@/models/vita'
import customers, { Customer } from '@/models/customers'

const VitaEntry = ({ vitaItem }: { vitaItem: VitaItem }) => {
  const { sm, md } = useResponsiveFontSize()

  const formatEndDate = (s: string | Date | undefined) => {
    if (!s) { return }
    if (typeof s === 'string') { return s }
    return s.getFullYear()
  }

  return (
    <Flex mb={8} maxWidth='90%'>
      <Box flex={1}>
        <Flex>
          {vitaItem.startDate &&
            <Text fontSize={sm} fontStyle='italic'>{vitaItem.startDate.getFullYear()}</Text>
          }
          {vitaItem.endDate &&
            <Text fontSize={sm} fontStyle='italic'>-</Text>
          }
        </Flex>
        <Text fontSize={sm} fontStyle='italic'> {formatEndDate(vitaItem.endDate)}</Text>
      </Box>
      <Box flex={5}>
        <Text fontWeight={600} fontSize={md}>{vitaItem.title}</Text>
        {vitaItem.description?.map((line: string, i: number) => <Text key={i} fontSize={md} lineHeight={1.4}>{line}</Text>)}
        <Text fontSize={sm} fontWeight={400} fontStyle='italic' color='blackAlpha.700' mb={1}>{vitaItem.company}</Text>
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
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <Flex pt={40} direction={{ base: 'column-reverse', md: 'row' }}>
          <Box flex={2}>
            <Flex maxWidth='90%'>
              <Box flex={1} />
              <Heading flex={5} fontSize={lg} mb={5} mt={{ base: 20, sm: 0 }}>Vita</Heading>
            </Flex>
            {
              vitaItems.map((vitaItem: VitaItem, i: number) => {
                return (
                  <VitaEntry key={i} vitaItem={vitaItem} />
                )
              })
            }
            <Flex maxWidth='90%'>
              <Box flex={1} />
              <Heading flex={5} fontSize={lg} mb={5} mt={20}>Ausbildung</Heading>
            </Flex>
            {
              educationItems.map((educationItem: VitaItem, i: number) => {
                return (
                  <VitaEntry key={i} vitaItem={educationItem} />
                )
              })
            }
            <Flex maxWidth='90%'>
              <Box flex={1} />
              <Box flex={5} mt={20}>
                <Heading fontSize={lg} mb={5}>Sprachen</Heading>
                <Text>Deutsch (Muttersprache)</Text>
                <Text>Englisch (fließend))</Text>
                <Text>Französisch (basis)</Text>
              </Box>
            </Flex>
          </Box>
          <Flex flex={1} direction='column' alignItems='flex-end'>
            <Heading fontSize={lg} mb={5} textAlign={{ base: 'left', md: 'right' }}>Ausgewählte Kunden</Heading>
            {customers.map((customer: Customer) => {
              return (
                <Text key={customer.name} fontSize={md} textAlign={{ base: 'left', md: 'right' }}>
                  {customer.name}, {customer.location}
                </Text>)
            })
            }
          </Flex>
        </Flex>
    </>
  )
}

export default Vita
