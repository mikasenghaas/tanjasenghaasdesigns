import { MotionBox } from '@/components/motion'

import { useColorModeValue } from '@chakra-ui/react'

export function Focus() {
  const color = useColorModeValue('blackAlpha.400', 'whiteAlpha.400' )

  return (
    <MotionBox
      position='absolute'
      top='-20%'
      left='-10%'
      h='140%'
      w='120%'
      bgColor={color}
      borderRadius={5}
      zIndex={-2}
      transition={{
        layout: {
          duration: 0.3,
          ease: 'easeOut',
        },
      }}
      layoutId='highlight'
    />)
}
