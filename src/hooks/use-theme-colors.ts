import { useColorModeValue } from '@chakra-ui/react'

const useThemeColors = () => {
  const primary = useColorModeValue('black', 'white')
  const secondary = useColorModeValue('blackAlpha.700', 'whiteAlpha.700')
  const tertiary = useColorModeValue('blackAlpha.400', 'whiteAlpha.400')

  const reversePrimary = useColorModeValue('white', 'black')
  const reverseSecondary = useColorModeValue('whiteAlpha.700', 'blackAlpha.700',)
  const reverseTertiary = useColorModeValue('whiteAlpha.400', 'blackAlpha.400')

  const headerBgColor = useColorModeValue('whiteAlpha.200', 'blackAlpha.200')
  const bgColor = useColorModeValue('white', 'gray.800')

  return { primary, secondary, tertiary, reversePrimary, reverseSecondary, reverseTertiary, bgColor, headerBgColor }
}

export default useThemeColors
