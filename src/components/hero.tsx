import Image from 'next/image'
import { Box } from '@chakra-ui/react'

import PageContainer from '@/components/page-container'
import { MotionHeading } from '@/components/motion'
import useThemeColors from '@/hooks/use-theme-colors'
import useWindowSize from '@/hooks/use-window-size'

export default function Hero() {
  const { primary } = useThemeColors()
  const { width } = useWindowSize()
  return (
    <>
      <Box
        position="fixed"
        top={0}
        height="100vh"
        width="100vw"
        mt={-20}
        zIndex={-1}
      >
        {width > 500
          ? <Image src='/assets/hero.jpg' alt='tanja-senghaas-designs-hero' layout="fill" objectFit="cover" priority />
          : <Image src='/assets/hero-mobile.jpg' alt='tanja-senghaas-designs-hero' layout="fill" objectFit="cover" priority />
        }
      </Box>
      <PageContainer>
        <Box
          mt="35vh"
          ml={{ base: 0, xl: '-10%' }}
          position="absolute"
          zIndex={-1}
        >
          <MotionHeading
            initial={{ opacity: 0, y: -10 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.5, duration: 0.5 }
            }}
            color={primary}
            fontSize={{
              base: '3xl',
              sm: '4xl',
              lg: '5xl',
              xl: '6xl',
              xxl: '7xl'
            }}
          >
            Gutes Design ist <br />
            mehr als nur schön.
            <br />
          </MotionHeading>
          <MotionHeading
            initial={{ opacity: 0, y: -10 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: 2, duration: 0.5 }
            }}
            color={primary}
            fontSize={{
              base: '3xl',
              sm: '4xl',
              lg: '5xl',
              xl: '6xl',
              xxl: '7xl'
            }}
          >
            Es ist eine Haltung.
          </MotionHeading>
        </Box>
      </PageContainer>
    </>
  )
}
