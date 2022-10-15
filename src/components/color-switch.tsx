import { useState, useEffect } from 'react'
import { useColorMode, useColorModeValue } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

import { MotionBox, MotionFlex } from '@/components/motion'
import { AnimatePresence } from "framer-motion";

import useThemeColors from "@/lib/useThemeColors";

const ColorSwitch = ({ ...props }: any) => {
  const { colorMode, toggleColorMode } = useColorMode()
  const oppositeColorMode = useColorModeValue('dark', 'light')
  const SwitchIcon = useColorModeValue(SunIcon, MoonIcon)

  const [focused, setFocused] = useState(false)

  const { secondary, tertiary } = useThemeColors()


  return (
    <AnimatePresence initial={false} exitBeforeEnter>
      <MotionFlex
        position='relative'
        h={8}
        w={8}
        alignItems='center'
        justifyContent='center'
        borderRadius={4}
        key={colorMode}
        onMouseEnter={() => setFocused(true)}
        onMouseLeave={() => setFocused(false)}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 40, opacity: 0 }}
        transition={{ duration: 0.1 }}
        aria-label={`Switch to ${oppositeColorMode} mode`}
        ml={2}
        onClick={toggleColorMode}
      >
        <SwitchIcon h={3} />
        {focused &&
          <MotionBox
            position='absolute'
            top='-5%'
            left='-5%'
            h='110%'
            w='110%'
            bgColor={tertiary}
            borderRadius={5}
            zIndex={-2}
            transition={{
              layout: {
                duration: 0.3,
                ease: 'easeOut',
              },
            }}
            layoutId='underline'
          />
        }
      </MotionFlex>
    </AnimatePresence>
  )
}

export default ColorSwitch
