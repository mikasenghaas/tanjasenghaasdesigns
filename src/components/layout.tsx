import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import PageContainer from '@/components/page-container'

import Hero from '@/components/hero'
import Header from '@/components/header'
import Footer from '@/components/footer'
import ColorSwitch from '@/components/color-switch'

import { MotionFlex, MotionBox } from '@/components/motion'
import { AnimatePresence, useAnimation } from 'framer-motion'
import useThemeColors from '@/lib/useThemeColors'

interface Props {
  children: React.ReactNode,
  heroUrl?: string
}
export default function Layout({ children }: Props) {
  const router = useRouter()
  const controls = useAnimation()
  const { bgColor } = useThemeColors()

  useEffect(() => {
    if (router.pathname === '/') {
      controls.start({
        y: "90vh",
        transition: { type: "ease-out", duration: .3 },
      })
    } else {
      controls.start({
        y: 0,
        transition: { type: "ease-out", duration: .3 },
      })

    }
  }, [controls, router.pathname])

  return (
    <>
      <Header />
      <Hero url='/assets/hero/index.jpg' alt='hero-image' />
      <MotionFlex
        animate={controls}
        direction='column'
        minHeight='100vh'
        bgColor={bgColor}
        borderRadius='20px 20px 0 0'
      >
        <MotionBox
          key={router.asPath}
          w='100%'
          animate={{ opacity: 1, transition: { duration: .5 } }}
          initial={{ opacity: 0 }}
        >
          <PageContainer>
            {children}
          </PageContainer>
        </MotionBox>
        <Footer />
      </MotionFlex>
    </>
  )
}
