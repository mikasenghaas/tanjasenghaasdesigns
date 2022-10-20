import type { NextPage } from 'next'
import Head from 'next/head'
import NextLink from 'next/link'
import { Box, Heading, Text, Link, Divider, UnorderedList, ListItem } from '@chakra-ui/react'

import useResponsiveFontSizes from '@/hooks/use-responsive-font-sizes'

const Datenschutzerklärung: NextPage = () => {
  const { md, xl } = useResponsiveFontSizes()

  return (
    <>
      <Head>
        <title>Datenschutz | Tanja Senghaas Designs.</title>
        <meta name="description" content="Datenschutzerkärung gemäß der Datenschutzgrundverordnung (DSGVO)" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
        <meta name="msapplication-TileColor" content="#da532c" />
      </Head>

      <Box pt={40}>
        <Heading fontSize={xl}>Datenschutzerklärung</Heading>
        <Divider my={2} />
        <Text>In dieser Datenschutzerklärung informieren wir Sie über die Verarbeitung personenbezogener Daten bei der Nutzung dieser Website.</Text>

        <Heading fontSize={md} mt={5} mb={1}>Verantworlicher</Heading>
        <Text fontSize={md}>Verantwortlich für die Datenverarbeitung ist <strong>Tanja Senghaas-Thomsen</strong> (<i>tanja.senghaas@web.de</i>).<br />Für weitere Details weisen wir auf das{" "}
          <NextLink href='/impressum' passHref>
            <Link fontStyle='italic'>Impressum</Link>
          </NextLink>
          {" "}hin.
        </Text>

        <Heading fontSize={md} mt={5} mb={1}>Datenschutzbeauftragter</Heading>
        <Text fontSize={md}>Der Datenschutzbeauftragte <strong>Jonas-Mika Senghaas</strong> und er ist unter der Adresse der Verantwortlichen zu erreichen. Bitte ergänzen Sie die Adresse bei der Kontaktaufnahme per Post mit dem Hinweis Datenschutzbeauftragter. Per E-Mail erreichen Sie meinen Datenschutzbeauftragten über die folgende E-Mail-Adresse: <i>mail@jonassenghaas.de</i>.</Text>

        <Heading fontSize={md} mt={5} mb={1}>Daten beim Websiteaufruf</Heading>
        <Text fontSize={md}>Tanja Senghaas-Thomsen benutzt <i>keine</i> Cookies und speichert daher keinerlei personenbezogene Daten. Die einzigen Daten, die vermittelt werden, sind die Daten, die zur Anzeige der Website auf dem von Ihnen verwendeten internetfähigen Gerät erforderlich sind. Das sind insbesondere: <i>IP-Adresse</i>, <i>Datum und Uhrzeit der Anfrage</i>, <i>jeweils übertragene Datenmenge die Website</i>, <i>Browsertyp und Browserversion</i>, <i>Betriebssystem</i>.</Text>
        <Text>Rechtsgrundlage für die Verarbeitung dieser Daten sind berechtigte Interessen gemäß Art. 6 Abs. 1 UAbs. 1 Buchstabe f) DSGVO, um die Darstellung der Website grundsätzlich zu ermöglichen.</Text>
        <Text>Darüber hinaus können Sie verschiedene Leistungen auf der Website nutzen, bei der weitere personenbezogene und nicht personenbezogene Daten verarbeitet werden.</Text>
        <UnorderedList mt={1}>
          <ListItem>Sie haben ein Auskunftsrecht bezüglich der Sie betreffenden personenbezogenen Daten, die der Verantwortliche verarbeitet (Art. 15 DSGVO),</ListItem>
          <ListItem>Sie haben das Recht auf Berichtigung der Sie betreffenden Daten, wenn diese unrichtig oder unvollständig gespeichert werden (Art. 16 DSGVO),</ListItem>
          <ListItem>Sie haben das Recht auf Löschung (Art. 17 DSGVO),</ListItem>
          <ListItem>Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen (Art. 18 DSGVO),</ListItem>
          <ListItem>Sie haben das Recht auf Datenübertragbarkeit (Art. 20 DSGVO),</ListItem>
          <ListItem>Sie haben ein Widerspruchsrecht gegen die Verarbeitung Sie betreffender personenbezogener Daten (Art. 21 DSGVO),</ListItem>
          <ListItem>Sie haben das Recht nicht einer ausschließlich auf einer automatisierten Verarbeitung – einschließlich Profiling – beruhenden Entscheidung unterworfen zu werden, die Ihnen gegenüber rechtliche Wirkung entfaltet oder sie in ähnlicher Weise erheblich beeinträchtigt (Art. 22 DSGVO), </ListItem>
          <ListItem>Sie haben das Recht, sich bei einem vermuteten Verstoß gegen das Datenschutzrecht bei der zuständigen Aufsichtsbehörde zu beschweren (Art. 77 DSGVO). Zuständig ist die Aufsichtsbehörde an Ihrem üblichen Aufenthaltsort, Arbeitsplatz oder am Ort des vermuteten Verstoßes.</ListItem>
        </UnorderedList>
      </Box>
    </>
  )
}

export default Datenschutzerklärung
