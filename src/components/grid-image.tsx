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
        <Flex overflow='hidden' alignItems='flex-start' justifyContent='space-between' mt={2}>
          <Text fontSize={md} >{project.name}</Text>
          {/*<MotionBadge variants={opacityIn} variant='subtle' colorScheme='gray' ml={2}>Read more</MotionBadge>*/}
        </Flex>
      </MotionBox >
    </Link >
  );
};

export default GridImage;
