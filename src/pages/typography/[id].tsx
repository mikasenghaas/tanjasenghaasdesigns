import type { NextPage, GetStaticPropsContext } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import { Flex, Box, AspectRatio, Heading, Text } from '@chakra-ui/react'

import typographyById from '@/models/projects/typography'
import useResponsiveFontSizes from '@/hooks/use-responsive-font-sizes'
import useThemeColors from '@/hooks/use-theme-colors'

export async function getStaticPaths() {
  const paths = Object.keys(typographyById).map((id: string) => {
    return { params: { id: id } }
  })
  return {
    paths: paths,
    fallback: false
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
  const { id, name, description, position, company, date } =
    JSON.parse(magazine)
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

      <Flex mt={40} direction={{ base: 'column', sm: 'row' }}>
        <Box flex={2} mb={10}>
          <Heading fontSize={lg}>{name}</Heading>
          <Text fontSize={sm} fontWeight={500} color={secondary}>
            {new Date(date).getFullYear()}, {position}
          </Text>
          <Text fontSize={md} color={primary} mt={5} flex={2}>
            {description}
          </Text>
          <Text fontSize={sm} fontWeight={500} color={secondary} mt={5}>
            {company}
          </Text>
        </Box>
        <AspectRatio flex={1} ratio={1}>
          <Image
            src={`/assets/typography/${id}/${id}0.jpg`}
            alt={`${id}`}
            layout="fill"
            objectFit="cover"
            style={{ borderRadius: '20px' }}
            placeholder="blur"
            blurDataURL={`/assets/typography/${id}/${id}0.jpg`}
            priority
          />
        </AspectRatio>
      </Flex>
    </>
  )
}

export default MagazinePage
