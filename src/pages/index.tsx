import type { NextPage } from 'next'
import Head from 'next/head'

import { Box, Grid, Heading } from '@chakra-ui/react'

import Layout from '@/components/layout'
import GridImage from '@/components/grid-image'
import EmblaCarousel from '@/components/embla-carousel'

import magazines, { Magazine } from '@/models/magazines'
import typographyProjects, { Typography } from '@/models/typography'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Tanja Senghaas</title>
        <meta name="Tanja Senghaas Designs" content="Creative Direction" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout heroUrl='/assets/hero/index.jpg'>
        <Box pt={20} >
          <Heading fontSize='lg' mb={10}>Magazinentwicklung</Heading>
          <Grid templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }} gap={5}>
            {
              Object.values(magazines).map((magazine: Magazine) => <GridImage key={magazine.id} project={magazine} type='magazine' />)
            }
          </Grid>
          <Heading fontSize='lg' mt={20} mb={10}>Typografie</Heading>
          <Grid templateColumns={{ base: 'repeat(2, 1fr)', sm: 'repeat(3, 1fr)', md: 'repeat(4, 1fr)' }} gap={5}>
            {
              typographyProjects.map((typographyProject: Typography) => <GridImage key={typographyProject.id} project={typographyProject} type='typography' />)
            }
          </Grid>
          <Heading fontSize='lg' mt={20} mb={10}>Kunden-Feedback</Heading>
          <EmblaCarousel />
        </Box>
      </Layout>
    </>
  )
}

export default Home
