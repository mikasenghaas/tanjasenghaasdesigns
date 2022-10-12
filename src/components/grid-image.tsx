import Image from "next/image";
import Link from "next/link";
import {
  Box,
  Flex,
  AspectRatio,
  Text,
  Link as ChakraLink
} from "@chakra-ui/react";

import type { Project } from '@/models/projects'
import { MotionBox, MotionAspectRatio, MotionBadge, MotionImage } from '@/components/motion'
import { useResponsiveFontSize } from '@/lib/responsive'

interface GridImageProps {
  project: Project,
  type: string
}

const GridImage = ({ project, type }: GridImageProps) => {
  const { sm, md } = useResponsiveFontSize()

  const opacityIn = {
    rest: { opacity: 0, },
    hover: { opacity: 1 },
  };
  const scaleUp = {
    rest: { scale: 1, },
    hover: { scale: 1.05 },
  }

  return (
    <MotionBox initial='rest' whileHover='hover' _hover={{ cursor: 'pointer' }}>
      <Link href={type === 'magazine' ? `/magazines/${project.id}` : `/typography/${project.id}`}>
        <AspectRatio ratio={1} border={type !== 'magazine' ? '1px solid black' : ''} overflow='hidden'>
          <MotionBox position='relative' variants={scaleUp}>
            <Image
              src={`/assets/projekte/${project.id}/${project.id}0.jpg`}
              alt={`${project.id}-preview`}
              layout='fill'
              objectFit='cover'
            />
          </MotionBox>
        </AspectRatio>
      </Link>
      <Flex overflow='hidden' alignItems='flex-start' justifyContent='space-between' mt={2}>
        <Text fontSize={md} >{project.name}</Text>
        <MotionBadge variants={opacityIn} variant='subtle' colorScheme='gray' ml={2}>Read more</MotionBadge>
      </Flex>
    </MotionBox >
  );
};

export default GridImage;
