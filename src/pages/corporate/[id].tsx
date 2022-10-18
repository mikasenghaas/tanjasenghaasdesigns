import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import { Box, Grid, AspectRatio, Heading, Text } from '@chakra-ui/react'

import corporateById from '@/models/projects/corporate'
import useResponsiveFontSizes from '@/hooks/use-responsive-font-sizes'
import useThemeColors from '@/hooks/use-theme-colors'

export async function getStaticPaths() {
  const paths = Object.keys(corporateById).map((id: string) => {
    return { params: { id: id } }
  })
  return {
    paths: paths,
    fallback: false
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
  const { id, name, description, position, company, date, numImages } =
    JSON.parse(corporate)
  const { sm, md, lg } = useResponsiveFontSizes()
  const { primary, secondary } = useThemeColors()

  return (
    <>
      <Head>
        <title>{name} | Tanja Senghaas Designs.</title>
        <meta
          name="description"
          content={`${name} | ${description}`}
        />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
        <meta name="msapplication-TileColor" content="#da532c" />
      </Head>

      <Box mt={40}>
        <Heading fontSize={lg}>{name}</Heading>
        <Text fontSize={sm} fontWeight={500} color={secondary}>
          {new Date(date).getFullYear()}, {position}
        </Text>
        <Text fontSize={md} color={primary} mt={5} maxWidth={{ sm: '75%' }}>
          {description}
        </Text>
        <Text fontSize={sm} fontWeight={500} color={secondary} mt={5}>
          {company}
        </Text>
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            lg: 'repeat(3, 1fr)'
          }}
          gap={5}
          mt={20}
        >
          {Array.from({ length: numImages }, (_, num: number) => {
            return (
              <AspectRatio key={num} ratio={1} borderRadius={10}>
                <Image
                  src={`/assets/corporate/${id}/${id}${num}.jpg`}
                  alt={`${id}-${num}`}
                  layout="fill"
                  objectFit="cover"
                  style={{ borderRadius: '20px' }}
                  placeholder="blur"
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
