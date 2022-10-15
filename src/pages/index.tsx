import type { NextPage } from 'next'
import Head from 'next/head'

import { Box, Grid, Heading } from '@chakra-ui/react'

import GridImage from '@/components/grid-image'
import EmblaCarousel from '@/components/embla-carousel'

import magazinesById, { Magazine } from '@/models/magazines'
import typographyById, { Typography } from '@/models/typography'
import corporateById, { Corporate } from '@/models/corporate'

import { useResponsiveFontSize } from '@/lib/responsive'

const Home: NextPage = () => {
  const magazines = Object.values(magazinesById)
  const typography = Object.values(typographyById)
  const corporate = Object.values(corporateById)

  const { xl } = useResponsiveFontSize()

  return (
    <>
      <Head>
        <title>Tanja Senghaas Designs.</title>
        <meta name="Tanja Senghaas Designs." content="Creative Direction" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box pt={20}>
        <Heading id='magazines' fontSize={xl} fontWeight={800} pt={20} mb={10} >Magazinentwicklung</Heading>
        <Grid templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }} gap='40px 20px'>
          {
            magazines.map((magazine: Magazine) => <GridImage key={magazine.id} project={magazine} type='magazines' />)
          }
        </Grid>
        <Heading id='corporate' fontSize={xl} fontWeight={800} pt={20} mb={10} >Corporate Design</Heading>
        <Grid templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }} gap='40px 20px'>
          {
            corporate.map((corporate: Corporate) => <GridImage key={corporate.id} project={corporate} type='corporate' />)
          }
        </Grid>
        <Heading id='typography' fontSize={xl} fontWeight={800} pt={20} mb={10}>Typografie</Heading>
        <Grid templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(3, 1fr)', md: 'repeat(4, 1fr)' }} gap='40px 20px'>
          {
            typography.map((typographyProject: Typography) => <GridImage key={typographyProject.id} project={typographyProject} type='typography' />)
          }
        </Grid>
        <Heading fontSize={xl} fontWeight={800} mt={20} mb={10}>Kunden-Feedback</Heading>
        <EmblaCarousel />
      </Box>
    </>
  )
}

export default Home
