import Image from 'next/image'
import { Box } from '@chakra-ui/react'

import Banner from '@/components/banner'

interface HeroProps {
  url: string,
  alt: string
}
export default function Hero({ url, alt }: HeroProps) {
  return (
    <Banner height='90vh' marginTop='-75px' zIndex={-1}>
      <Image
        src={url}
        alt={alt}
        layout='fill'
        objectFit='cover'
        priority
      />
    </Banner>
  )
}
