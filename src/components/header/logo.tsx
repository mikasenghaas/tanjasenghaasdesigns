import NextLink from 'next/link'
import { Flex, Link } from '@chakra-ui/react'
import { ArrowLeftIcon } from '@chakra-ui/icons'

import { MotionFlex, MotionBox, MotionHeading } from '@/components/motion'
import useResponsiveFontSizes from "@/hooks/use-responsive-font-sizes"

import { logoAnimation } from './animations'

export function Logo() {
  const { xl } = useResponsiveFontSizes()

  return (
    <NextLink href="/" passHref>
      <Link _hover={{ textDecoration: 'none' }}>
        <MotionBox initial='initial' whileHover='animate' overflow='hidden'>
          <MotionFlex variants={logoAnimation} alignItems='center'>
            <ArrowLeftIcon h={3} />
            <Flex>
              <MotionHeading fontSize={xl} fontWeight={800} ml='2px'>Tanja Senghaas Designs.</MotionHeading>
            </Flex>
          </MotionFlex>
        </MotionBox>
      </Link>
    </NextLink>

  )
}
