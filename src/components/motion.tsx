import { Box, Flex, AspectRatio, Heading, Badge, Text } from '@chakra-ui/react'
import { Image } from 'next/image'
import { motion } from 'framer-motion'

export const MotionBox = motion(Box)
export const MotionFlex = motion(Flex)
export const MotionHeading = motion(Heading)
export const MotionText = motion(Text)
export const MotionAspectRatio = motion(AspectRatio)
export const MotionBadge = motion(Badge)
export const MotionImage = motion(Image)
