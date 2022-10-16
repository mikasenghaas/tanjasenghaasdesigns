import Image from "next/image";
import Link from "next/link";
import {
  Flex,
  AspectRatio,
  Text,
} from "@chakra-ui/react";

import type { Project } from '@/models/projects'
import { MotionBox, MotionBadge } from '@/components/motion'
import useResponsiveFontSizes from '@/hooks/use-responsive-font-sizes'
import useThemeColors from '@/hooks/use-theme-colors'

interface GridImageProps {
  project: Project,
  type: string
}

const GridImage = ({ project, type }: GridImageProps) => {
  const { primary, secondary } = useThemeColors()
  const { sm } = useResponsiveFontSizes()

  const scaleUp = {
    rest: { scale: 1, },
    hover: { scale: 1.05 },
  }

  return (
    <Link href={`/${type}/${project.id}`}>
      <MotionBox initial='rest' whileHover='hover' _hover={{ cursor: 'pointer' }} >
        <AspectRatio ratio={1} border={type === 'typography' ? '1px solid black' : ''} overflow='hidden' borderRadius={10}>
          <MotionBox position='relative' variants={scaleUp} borderRadius={10}>
            <Image
              src={`/assets/${type}/${project.id}/${project.id}0.jpg`}
              alt={`${project.id}-preview`}
              layout='fill'
              objectFit='cover'
              placeholder='blur'
              blurDataURL={`/assets/${type}/${project.id}/${project.id}0.jpg`}
              priority
            />
          </MotionBox>
        </AspectRatio>
        <Flex overflow='hidden' direction='column' alignItems='flex-start' justifyContent='space-between' mt={1}>
          <Text fontSize={sm} fontWeight={600} color={primary}>{project.name}</Text>
          <Text lineHeight={1.2} fontSize={sm} fontWeight={400} color={secondary}>{project.company}</Text>
        </Flex>
      </MotionBox >
    </Link >
  );
};

export default GridImage;
