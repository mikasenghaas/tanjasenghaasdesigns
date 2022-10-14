import type { NextPage } from 'next'
import Head from 'next/head'

import { Box, Grid, Heading } from '@chakra-ui/react'

import Layout from '@/components/layout'
import GridImage from '@/components/grid-image'
import EmblaCarousel from '@/components/embla-carousel'

import magazinesById, { Magazine } from '@/models/magazines'
import typographyById, { Typography } from '@/models/typography'
import corporateById, { Corporate } from '@/models/corporate'

import { useResponsiveFontSize } from '@/lib/responsive'
import { MotionHeading } from '@/components/motion'

const Home: NextPage = () => {
  const magazines = Object.values(magazinesById)
  const typography = Object.values(typographyById)
  const corporate = Object.values(corporateById)

  const { xl } = useResponsiveFontSize()

  return (
    <>
      <Head>
        <title>Tanja Senghaas</title>
        <meta name="Tanja Senghaas Designs" content="Creative Direction" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout heroUrl='/assets/hero/index.jpg'>
        <Box
          position='absolute'
          mt={{ base: '-300px', sm: '-350px', md: '-350px', xl: '-500px' }}
          ml={{ base: 0, xl: -40 }}
        >
          <MotionHeading
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0, transition: { delay: .5, duration: .5 } }}
            color='gray.800'
            fontSize={{ base: '4xl', sm: '5xl', md: '6xl', lg: '6xl', xl: '6xl', xxl: '7xl' }}
          >
            Gutes Design ist <br />
            mehr als nur schön.<br />
          </MotionHeading>
          <MotionHeading
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 1.5, duration: .5 } }}
            color='gray.800'
            fontSize={{ base: '4xl', sm: '5xl', md: '6xl', lg: '6xl', xl: '6xl', xxl: '7xl' }}
          >
            Es ist eine Haltung.
          </MotionHeading>
        </Box>
        <Box >
          <Heading id='magazines' fontSize={xl} fontWeight={800} pt={20} mb={10} >Magazinentwicklung</Heading>
          <Grid templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }} gap='40px 20px'>
            {
              magazines.map((magazine: Magazine) => <GridImage key={magazine.id} project={magazine} type='magazine' />)
            }
          </Grid>
          <Heading id='corporate' fontSize={xl} fontWeight={800} pt={20} mb={10} >Corporate Design</Heading>
          <Grid templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }} gap='40px 20px'>
            {
              corporate.map((corporate: Corporate) => <GridImage key={corporate.id} project={corporate} type='magazine' />)
            }
          </Grid>
          <Heading id='typography' fontSize={xl} fontWeight={800} pt={20} mb={10}>Typografie</Heading>
          <Grid templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(3, 1fr)', md: 'repeat(4, 1fr)' }} gap='40px 20px'>
            {
              typography.map((typographyProject: Typography) => <GridImage key={typographyProject.id} project={typographyProject} type='typography' />)
            }
          </Grid>
          <Heading fontSize={xl} mt={20} mb={10}>Kunden-Feedback</Heading>
          <EmblaCarousel />
        </Box>
      </Layout>
    </>
  )
}

export default Home
