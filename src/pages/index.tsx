import type { NextPage } from 'next'
import Head from 'next/head'

import { Grid, Heading } from '@chakra-ui/react'

import Layout from '@/components/layout'
import Hero from '@/components/hero'
import GridImage from '@/components/grid-image'

import printProjects, { Print } from '@/models/prints'
import typographyProjects, { Typography } from '@/models/typography'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Tanja Senghaas</title>
        <meta name="Tanja Senghaas Designs" content="Creative Direction" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Hero url="/assets/portrait/tanja-senghaas-portrait-index.jpg" alt="tanja-senghaas-portrait" height='100vh' />
        <Heading fontSize='lg' mt={20} mb={10}>Magazinentwicklung</Heading>
        <Grid templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }} gap={5}>
          {
            printProjects.map((printProject: Print) => <GridImage key={printProject.id} project={printProject} border={false} />)
          }
        </Grid>
        <Heading fontSize='lg' mt={20} mb={10}>Typografie</Heading>
        <Grid templateColumns={{ base: 'repeat(2, 1fr)', sm: 'repeat(3, 1fr)', md: 'repeat(4, 1fr)' }} gap={5}>
          {
            typographyProjects.map((typographyProject: Typography) => <GridImage key={typographyProject.id} project={typographyProject} border={true} />)
          }
        </Grid>
      </Layout>
    </>
  )
}

export default Home
