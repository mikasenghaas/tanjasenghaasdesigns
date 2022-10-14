import Image from "next/image";
import Link from "next/link";
import {
  Flex,
  AspectRatio,
  Text,
} from "@chakra-ui/react";

import type { Project } from '@/models/projects'
import { MotionBox, MotionBadge } from '@/components/motion'
import { useResponsiveFontSize } from '@/lib/responsive'

interface GridImageProps {
  project: Project,
  type: string
}

const GridImage = ({ project, type }: GridImageProps) => {
  const { sm, md } = useResponsiveFontSize()
  const dir = type === 'magazine' ? 'magazines' : 'typography'

  const opacityIn = {
    rest: { opacity: 0, },
    hover: { opacity: 1 },
  };
  const scaleUp = {
    rest: { scale: 1, },
    hover: { scale: 1.05 },
  }

  return (
    <Link href={type === 'magazine' ? `/magazines/${project.id}` : `/typography/${project.id}`}>
      <MotionBox initial='rest' whileHover='hover' _hover={{ cursor: 'pointer' }} >
        <AspectRatio ratio={1} border={type !== 'magazine' ? '1px solid black' : ''} overflow='hidden' borderRadius={10}>
          <MotionBox position='relative' variants={scaleUp} borderRadius={10}>
            <Image
              src={`/assets/${dir}/${project.id}/${project.id}0.jpg`}
              alt={`${project.id}-preview`}
              layout='fill'
              objectFit='cover'
            />
          </MotionBox>
        </AspectRatio>
        <Flex overflow='hidden' direction='column' alignItems='flex-start' justifyContent='space-between' mt={1}>
          <Text fontSize={sm} fontWeight={600}>{project.name}</Text>
          <Text lineHeight={1.2} fontSize={sm} fontWeight={400} color='blackAlpha.800'>{project.company}</Text>
        </Flex>
      </MotionBox >
    </Link >
  );
};

export default GridImage;
