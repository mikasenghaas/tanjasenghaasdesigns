import type { NextPage } from 'next'
import Head from 'next/head'

import { Box, Grid, Heading } from '@chakra-ui/react'
import Layout from '@/components/layout'

import GridImage from '@/components/grid-image'

import magazinesById, { Magazine } from '@/models/magazines'
import typographyById, { Typography } from '@/models/typography'

const Projekte: NextPage = () => {
  const magazines = Object.values(magazinesById)
  const typography = Object.values(typographyById)

  return (
    <>
      <Head>
        <title>Projekte | Tanja Senghaas</title>
        <meta name="Projekte | Tanja Senghaas Designs" content="" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout heroUrl='/assets/hero/kontakt.jpg'>
        <Box pt={20} >
          <Heading fontSize='lg' mb={10}>Magazinentwicklung</Heading>
          <Grid templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }} gap={5}>
            {
              magazines.map((magazine: Magazine) => <GridImage key={magazine.id} project={magazine} type='magazine' />)
            }
          </Grid>
          <Heading fontSize='lg' mt={20} mb={10}>Typografie</Heading>
          <Grid templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }} gap={5}>
            {
              typography.map((typographyProject: Typography) => <GridImage key={typographyProject.id} project={typographyProject} type='typography' />)
            }
          </Grid>
        </Box>
      </Layout>
    </>
  )
}

export default Projekte
