import Image from "next/image";
import Link from "next/link";
import {
  GridItem,
  AspectRatio,
  Text,
  Link as ChakraLink
} from "@chakra-ui/react";

import type Project from '@/models/projects'

interface GridImageProps {
  project: Project,
  border?: boolean
}

const GridImage = ({ project, border }: GridImageProps) => {
  return (
    <GridItem>
      <Link href='kontakt'>
        <ChakraLink>
          <AspectRatio ratio={1} border={border ? '1px solid black' : ''}>
            <Image
              src={`/assets/projekte/${project.id}/${project.id}0.jpg`}
              alt={`${project.id}-preview`}
              layout='fill'
              objectFit='cover'
            />
          </AspectRatio>
        </ChakraLink>
      </Link>
      <Text fontSize={{ base: 'xs', lg: 'sm', xxl: 'lg' }} mt={1}>{project.name}</Text>
    </GridItem >
  );
};

export default GridImage;
