import { Flex, Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

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
        {isExternal && <ExternalLinkIcon mx={1} h={3} />}
      </Flex>
    </Link>
  )
}

export default ExternalLink
