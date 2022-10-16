import { MotionBox } from '@/components/motion'
import { useColorModeValue } from '@chakra-ui/react'

export function Selected() {
  const color = useColorModeValue('gray.200', 'gray.700')

  return (
    <MotionBox
      position="absolute"
      top="-20%"
      left="-10%"
      h="140%"
      w="120%"
      bgColor={color}
      borderRadius={5}
      zIndex={-1}
      transition={{
        layout: {
          duration: 0.3,
          ease: 'easeOut'
        }
      }}
    />
  )
}
