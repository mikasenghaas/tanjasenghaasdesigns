import '@fontsource/montserrat'
import type { AppProps } from 'next/app'

import Chakra from '@/components/chakra'
import Layout from '@/components/layout'
import theme from '@/lib/theme'

function App({ Component, pageProps }: AppProps) {
  return (
    <Chakra theme={theme} cookies={pageProps.cookies}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Chakra >
  )
}

export function getServerSideProps({ req }: any) {
  return {
    props: {
      // first time users will not have any cookies and you may not return
      // undefined here, hence ?? is necessary
      cookies: req.headers.cookie ?? '',
    },
  }
}

export default App
