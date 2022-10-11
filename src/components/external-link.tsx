import { Flex, Text, Link } from '@chakra-ui/react'
import { FiExternalLink as ExternalLinkIcon } from 'react-icons/fi'

import { useResponsiveFontSize } from '@/lib/responsive'

interface ExternalLinkProps {
  href: string,
  text: string,
  size: string,
  isExternal?: boolean
}
const ExternalLink = ({ href, text, size, isExternal }: ExternalLinkProps) => {
  const fontSizes = useResponsiveFontSize();

  return (
    <Link href={href} isExternal={isExternal}>
      <Flex align='center'>
        <Text fontSize={fontSizes[size]}>{text}</Text>
        {isExternal && <ExternalLinkIcon style={{ margin: '0 5px' }} size={14} />}
      </Flex>
    </Link>
  )
}

export default ExternalLink
