import { useRouter } from 'next/router'
import { Box, Flex } from '@chakra-ui/react'

import PageContainer from '@/components/page-container'
import Hero from '@/components/hero'
import { MotionBox } from '@/components/motion'

import { AnimatePresence } from 'framer-motion'

interface Props {
  children: React.ReactNode,
  heroUrl?: string
}
export default function Layout({ heroUrl, children }: Props) {
  const router = useRouter()

  const opacitySlow = {
    initial: { y: 50, },
    animate: { y: 0, transition: { duration: .5 } },
    exit: { y: 50, transition: { duration: 1 } }
  }

  return (
    <AnimatePresence initial={true} mode='wait'>
      <MotionBox
        key={router.pathname}
        initial='initial'
        animate='animate'
        exit='exit'
      >
        {heroUrl && <Hero url={heroUrl} alt='hero-image' />}
        <MotionBox w='100%' bgColor='white' variants={opacitySlow}>
          <PageContainer >
            {children}
          </PageContainer>

        </MotionBox>
      </MotionBox>
    </AnimatePresence>
  )
}
