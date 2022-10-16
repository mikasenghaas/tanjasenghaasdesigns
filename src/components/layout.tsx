import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import PageContainer from '@/components/page-container'

import Hero from '@/components/hero'
import Header from '@/components/header'
import Footer from '@/components/footer'

import { AnimatePresence } from 'framer-motion'
import { MotionFlex, MotionBox } from '@/components/motion'
import useThemeColors from '@/hooks/use-theme-colors'
import { useAnimation } from 'framer-motion'

interface Props {
  children: React.ReactNode
  heroUrl?: string
}
export default function Layout({ children }: Props) {
  const router = useRouter()
  const controls = useAnimation()
  const { bgColor } = useThemeColors()

  useEffect(() => {
    if (router.pathname === '/') {
      controls.start({
        y: '90vh',
        transition: { type: 'ease-out', duration: 0.5 }
      })
    } else {
      controls.start({
        y: 0,
        transition: { type: 'ease-out', duration: 0.5 }
      })
    }
  }, [controls, router.pathname])

  return (
    <>
      <Header />
      <Hero />
      <MotionFlex
        animate={controls}
        direction="column"
        minHeight="100vh"
        bgColor={bgColor}
      >
        <AnimatePresence mode="wait">
          <MotionBox
            key={router.asPath}
            w="100%"
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
          >
            <PageContainer>{children}</PageContainer>
          </MotionBox>
        </AnimatePresence>
        <Footer />
      </MotionFlex>
    </>
  )
}
