import { useRouter } from 'next/router'
import PageContainer from '@/components/page-container'
import { Box } from '@chakra-ui/react'

import { MotionBox } from '@/components/motion'
import { AnimatePresence } from 'framer-motion'

interface Props {
  children: React.ReactNode,
  heroUrl?: string
}
export default function Layout({ children }: Props) {
  const router = useRouter()

  console.log(router.asPath)
  return (
    <AnimatePresence>
      <MotionBox
        key={router.asPath}
        w='100%'
        animate={{ opacity: 1, transition: { duration: .5 } }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0, transition: { duration: .5 } }}
      >
        <PageContainer>
          {children}
        </PageContainer>
      </MotionBox>
    </AnimatePresence >
  )
}
