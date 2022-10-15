import Image from 'next/image'
import { ScrollParallax } from 'react-just-parallax'
import { Box } from '@chakra-ui/react'

import PageContainer from '@/components/page-container'
import { MotionHeading } from '@/components/motion'

interface HeroProps {
  url: string,
  alt: string
}
export default function Hero({ url, alt }: HeroProps) {
  return (
    <>
      <Box position='fixed' top={0} height='100vh' width='100vw' zIndex={-1}>
        <Image
          src={url}
          alt={alt}
          layout='fill'
          objectFit='cover'
          priority
        />
      </Box>
      <PageContainer>
        <Box
          mt='35vh'
          ml={{ base: 0, xl: '-10%' }}
          position='absolute'
          zIndex={-1}
        >
          <MotionHeading
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0, transition: { delay: .5, duration: .5 } }}
            color='gray.800'
            fontSize={{ base: '3xl', sm: '4xl', lg: '5xl', xl: '6xl', xxl: '7xl' }}
          >
            Gutes Design ist <br />
            mehr als nur schön.<br />
          </MotionHeading>
          <MotionHeading
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 2, duration: .5 } }}
            color='gray.800'
            fontSize={{ base: '3xl', sm: '4xl', lg: '5xl', xl: '6xl', xxl: '7xl' }}
          >
            Es ist eine Haltung.
          </MotionHeading>
        </Box>
      </PageContainer>
    </>
  )
}
