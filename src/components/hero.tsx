import Image from 'next/image'

import Banner from '@/components/banner'

interface HeroProps {
  url: string,
  alt: string
  height: string
}
export default function Hero({ url, alt, height }: HeroProps) {
  return (
    <Banner height={height} mt='-10%' zIndex={-1}>
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
