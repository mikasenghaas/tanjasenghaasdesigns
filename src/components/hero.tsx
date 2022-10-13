import Image from 'next/image'
import { ScrollParallax } from 'react-just-parallax'

import Banner from '@/components/banner'

interface HeroProps {
  url: string,
  alt: string
}
export default function Hero({ url, alt }: HeroProps) {
  return (
    <Banner position='relative' height='100vh' mt={-20} zIndex={-1}>
      <ScrollParallax strength={0.5} lerpEase={.3}>
        <Image
          src={url}
          alt={alt}
          layout='fill'
          objectFit='cover'
          priority
        />
      </ScrollParallax>
    </Banner>

  )
}
