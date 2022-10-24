import type { NextPage } from 'next'
import Image from 'next/image'
import Head from 'next/head'

import {
  Box,
  AspectRatio,
  Grid,
  GridItem,
  Heading,
  Text
} from '@chakra-ui/react'

import serviceItems, { Service } from '@/models/services'
import useResponsiveFontSizes from '@/hooks/use-responsive-font-sizes'

const Angebot: NextPage = () => {
  const { sm, md, xl } = useResponsiveFontSizes()

  return (
    <>
      <Head>
        <title>Angebot | Tanja Senghaas Designs.</title>
        <meta name="description" content="Die erfahrene Art Direktorin und Designerin Tanja Senghaas bietet hochwertige Gestaltung in den Bereichen Corporate Design, Magazinentwicklung und Typografie." />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
        <meta name="msapplication-TileColor" content="#da532c" />
      </Head>

      <Box pt={40}>
        <Heading fontSize={xl} fontWeight={800} mb={5}>
          Mein Angebot
        </Heading>
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)'
          }}
          gap="50px 10px"
          mt={10}
        >
          {serviceItems.map((service: Service, i: number) => {
            return (
              <GridItem key={i}>
                <AspectRatio ratio={1}>
                  <Box borderRadius={10}>
                    <Image
                      src={`/assets/services/${service.name
                        .toLowerCase()
                        .replaceAll(' ', '-')}.jpg`}
                      alt={`${service.name}-image`}
                      layout="fill"
                      objectFit="cover"
                      placeholder="blur"
                      blurDataURL={`/assets/services/${service.name
                        .toLowerCase()
                        .replaceAll(' ', '-')}.jpg`}
                      priority
                    />
                  </Box>
                </AspectRatio>
                <Heading fontSize={md} my={{ base: 3, sm: 4 }}>
                  {service.name}
                </Heading>
                <Text fontSize={sm}>{service.description}</Text>
              </GridItem>
            )
          })}
        </Grid>
      </Box>
    </>
  )
}

export default Angebot
