import type {
  NextPage,
  GetStaticPropsContext,
} from 'next'
import Head from 'next/head'
import Image from 'next/image'

import { Flex, Box, AspectRatio, Heading, Text } from '@chakra-ui/react'

import Layout from '@/components/layout'
import typographyById from '@/models/typography'
import { useResponsiveFontSize } from '@/lib/responsive'

export async function getStaticPaths() {
  const paths = Object.keys(typographyById).map((id: string) => { return { params: { id: id } } })
  return {
    paths: paths,
    fallback: false,
  }
}

export async function getStaticProps(context: any) {
  const id = context.params.id
  const typography = typographyById[id]

  if (typography) {
    return { props: { magazine: JSON.stringify(typography) } }
  } else {
    return { notFound: true }
  }
}

interface Props {
  magazine: string
}
const MagazinePage: NextPage<Props> = ({ magazine }: Props) => {
  const { id, name, description, position, company, date } = JSON.parse(magazine)
  const { sm, md, lg } = useResponsiveFontSize()

  return (
    <>
      <Head>
        <title>{name} | Tanja Senghaas</title>
        <meta name={`${name} | Tanja Senghaas Designs`} content={`${name} | ${description}`} />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Flex mt={40} direction={{ base: 'column', sm: 'row' }}>
          <Box flex={2} mb={10}>
            <Heading fontSize={lg}>{name}</Heading>
            <Text fontSize={sm} fontWeight={500} color='gray'>{new Date(date).getFullYear()}, {position}</Text>
            <Text fontSize={md} mt={5} flex={2}>{description}</Text>
            <Text fontSize={sm} fontWeight={500} color='gray' mt={5}>{company}</Text>
          </Box>
          <AspectRatio flex={1} ratio={1}>
            <Image
              src={`/assets/typography/${id}/${id}0.jpg`}
              alt={`${id}`}
              layout='fill'
              objectFit='cover'
            />
          </AspectRatio>
        </Flex>
      </Layout >
    </>
  )
}

export default MagazinePage
