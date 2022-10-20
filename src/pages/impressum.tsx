import type { NextPage } from 'next'
import Head from 'next/head'
import { Flex, Box, Heading, Text, Divider } from '@chakra-ui/react'

import useResponsiveFontSizes from '@/hooks/use-responsive-font-sizes'

const Impressum: NextPage = () => {
  const { md, xl } = useResponsiveFontSizes()

  return (
    <>
      <Head>
        <title>Impressum | Tanja Senghaas Designs.</title>
        <meta name="description" content="Gesetzlich vorgeschriebene Angabe det presserechtlich Verantwortlichen von der Portfolio Website von Tanja Senghaas-Thomsen" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
        <meta name="msapplication-TileColor" content="#da532c" />
      </Head>

      <Box pt={40}>
        <Heading fontSize={xl} >Impressum</Heading>
        <Divider my={2} />
        <Text fontSize={md} >Diese Website wird angeboten von:</Text>
        <Text fontSize={md} fontWeight={700} mt={10}>Tanja Senghaas Designs.</Text>
        <Flex maxWidth='500px' my={2}>
          <Text flex={1} fontSize={md} fontWeight={300}>Inhaberin</Text>
          <Text flex={2} fontSize={md} fontWeight={500}>Tanja Senghaas Thomsen</Text>
        </Flex>
        <Flex maxWidth='500px' my={2}>
          <Text flex={1} fontSize={md} fontWeight={300}>Adresse</Text>
          <Box flex={2} fontSize={md} fontWeight={500}>
            <Text>Horandstieg 30</Text>
            <Text>22559, Hamburg</Text>
          </Box>
        </Flex>
        <Flex maxWidth='500px' my={1}>
          <Text flex={1} fontSize={md} fontWeight={300}>Email</Text>
          <Text flex={2} fontSize={md} fontWeight={500}>tanja.senghaas@web.de</Text>
        </Flex>
        <Flex maxWidth='500px' my={1}>
          <Text flex={1} fontSize={md} fontWeight={300}>Telefon</Text>
          <Text flex={2} fontSize={md} fontWeight={500}>+49 151 22543476</Text>
        </Flex>
        <Flex maxWidth='500px' my={1}>
          <Text flex={1} fontSize={md} fontWeight={300}>Webpräsenz</Text>
          <Text flex={2} fontSize={md} fontWeight={500}>tanjasenghaas.de</Text>
        </Flex>
        <Heading fontSize={xl} mt={20}>Rechtliche Hinweise</Heading>
        <Divider my={3} />
        <Text fontSize={md}>
          Ich weise darauf hin, dass Informationen auf dieser Site technische Ungenauigkeiten oder typografische Fehler enthalten können. Ich behalte mir vor, die Informationen dieser Seite jederzeit und ohne vorherige Ankündigung zu ändern oder zu aktualisieren.

          Alle auf unseren Internetseiten veröffentlichten Werke bzw. Werkteile wie z.B. Texte, Dateien, Logos, Designs und Bilder sind urheberrechtlich geschützt. Jede weitere Veröffentlichung, Vervielfältigung, Verbreitung oder sonstige Nutzung – auch auszugsweise – bedarf der schriftlichen Genehmigung von Tanja Senghaas-Thomsen.
        </Text>
      </Box>
    </>
  )
}

export default Impressum
