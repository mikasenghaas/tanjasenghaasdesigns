import '@fontsource/montserrat'
import type { AppProps } from 'next/app'

import Chakra from '@/components/chakra'
import Layout from '@/components/layout'
import theme from '@/lib/theme'

interface pageProps {
  cookies: string
}
function App({ Component, pageProps }: AppProps<pageProps>) {
  return (
    <Chakra theme={theme} cookies={pageProps.cookies}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Chakra>
  )
}

export function getServerSideProps({ req }: any) {
  return {
    props: {
      cookies: req.headers.cookie ?? ''
    }
  }
}

export default App
