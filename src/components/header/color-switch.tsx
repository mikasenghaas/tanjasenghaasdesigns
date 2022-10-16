import { useColorMode, useColorModeValue } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import { MotionFlex } from '@/components/motion'
import { AnimatePresence } from "framer-motion"

import useThemeColors from "@/hooks/use-theme-colors";

export function ColorSwitch() {
  const { colorMode, toggleColorMode } = useColorMode()
  const { primary } = useThemeColors()

  const oppositeColorMode = useColorModeValue('dark', 'light')
  const SwitchIcon = useColorModeValue(MoonIcon, SunIcon)

  return (
    <AnimatePresence mode='wait' initial={false}>
      <MotionFlex
        key={colorMode}
        initial={{ y: -5, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 10, opacity: 0 }}
        transition={{ duration: 0.3 }}
        aria-label={`Switch to ${oppositeColorMode} mode`}
        color={primary}
        onClick={toggleColorMode}
        w='full'
        h='full'
        alignItems='center'
        justifyContent='center'
      >
        <SwitchIcon h={4} />
      </MotionFlex>
    </AnimatePresence>

  )
}
