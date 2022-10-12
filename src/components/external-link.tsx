import { Flex, Text, Link } from '@chakra-ui/react'
import { FiExternalLink as ExternalLinkIcon } from 'react-icons/fi'

import { useResponsiveFontSize } from '@/lib/responsive'

interface ExternalLinkProps {
  href: string,
  children: React.ReactNode,
  isExternal?: boolean
}
const ExternalLink = ({ href, children, isExternal }: ExternalLinkProps) => {

  return (
    <Link href={href} isExternal={isExternal}>
      <Flex align='center'>
        {children}
        {isExternal && <ExternalLinkIcon style={{ margin: '0 5px' }} size={14} />}
      </Flex>
    </Link>
  )
}

export default ExternalLink
