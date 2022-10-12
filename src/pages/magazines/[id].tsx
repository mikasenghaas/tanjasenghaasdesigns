import type {
  NextPage,
  GetStaticPropsContext,
} from 'next'
import Head from 'next/head'
import Image from 'next/image'

import { Box, Grid, AspectRatio, Heading, Text } from '@chakra-ui/react'

import Layout from '@/components/layout'
import magazinesById from '@/models/magazines'
import { useResponsiveFontSize } from '@/lib/responsive'

export async function getStaticPaths() {
  const paths = Object.keys(magazinesById).map((id: string) => { return { params: { id: id } } })
  return {
    paths: paths,
    fallback: false,
  }
}

export async function getStaticProps(context: any) {
  const id = context.params.id
  const magazine = magazinesById[id]

  if (magazine) {
    return { props: { magazine: JSON.stringify(magazine) } }
  } else {
    return { notFound: true }
  }
}

interface Props {
  magazine: string
}
const MagazinePage: NextPage<Props> = ({ magazine }: Props) => {
  const { id, name, description, position, company, date, numImages } = JSON.parse(magazine)
  const { sm, md, lg } = useResponsiveFontSize()

  return (
    <>
      <Head>
        <title>{name} | Tanja Senghaas</title>
        <meta name={name} content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Box mt={40}>
          <Heading fontSize={lg}>{name}</Heading>
          <Text fontSize={sm} fontWeight={500} color='gray'>{new Date(date).getFullYear()}, {position}</Text>
          <Text fontSize={md} mt={5} maxWidth='75%'>{description}</Text>
          <Text fontSize={sm} fontWeight={500} color='gray' mt={5}>{company}</Text>
          <Grid templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} gap={5} mt={20}>
            {Array.from({ length: numImages }, (_, num: number) => {
              console.log(num)
              return (
                <AspectRatio key={num} ratio={1}>
                  <Image
                    src={`/assets/magazines/${id}/${id}${num}.jpg`}
                    alt={`${id}-${num}`}
                    layout='fill'
                    objectFit='cover'
                  />
                </AspectRatio>
              )
            })}
          </Grid>
        </Box>
      </Layout>
    </>
  )
}

export default MagazinePage
