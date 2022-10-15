import type {
  NextPage,
} from 'next'
import Head from 'next/head'
import Image from 'next/image'

import { Box, Grid, AspectRatio, Heading, Text } from '@chakra-ui/react'

import corporateById from '@/models/corporate'
import { useResponsiveFontSize } from '@/lib/responsive'
import useThemeColors from '@/lib/useThemeColors'

export async function getStaticPaths() {
  const paths = Object.keys(corporateById).map((id: string) => { return { params: { id: id } } })
  return {
    paths: paths,
    fallback: false,
  }
}

export async function getStaticProps(context: any) {
  const id = context.params.id
  const corporate = corporateById[id]

  if (corporate) {
    return { props: { corporate: JSON.stringify(corporate) } }
  } else {
    return { notFound: true }
  }
}

interface Props {
  corporate: string
}
const CorporatePage: NextPage<Props> = ({ corporate }: Props) => {
  const { id, name, description, position, company, date, numImages } = JSON.parse(corporate)
  const { sm, md, lg } = useResponsiveFontSize()
  const { primary, secondary } = useThemeColors()

  return (
    <>
      <Head>
        <title>{name} | Tanja Senghaas</title>
        <meta name={`${name} | Tanja Senghaas Designs`} content={`${name} | ${description}`} />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box mt={40}>
        <Heading fontSize={lg}>{name}</Heading>
        <Text fontSize={sm} fontWeight={500} color={secondary}>{new Date(date).getFullYear()}, {position}</Text>
        <Text fontSize={md} color={primary} mt={5} maxWidth={{ sm: '75%' }}>{description}</Text>
        <Text fontSize={sm} fontWeight={500} color={secondary} mt={5}>{company}</Text>
        <Grid templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} gap={5} mt={20}>
          {Array.from({ length: numImages }, (_, num: number) => {
            return (
              <AspectRatio key={num} ratio={1} borderRadius={10}>
                <Image
                  src={`/assets/corporate/${id}/${id}${num}.jpg`}
                  alt={`${id}-${num}`}
                  layout='fill'
                  objectFit='cover'
                  style={{ borderRadius: '20px' }}
                  placeholder='blur'
                  blurDataURL={`/assets/corporate/${id}/${id}${num}.jpg`}
                  priority
                />
              </AspectRatio>
            )
          })}
        </Grid>
      </Box>
    </>
  )
}

export default CorporatePage
