import { useBreakpointValue } from '@chakra-ui/react'

export function useResponsiveFontSize() {
  const sm = useBreakpointValue({ base: 'xs', md: 'sm', xxl: 'md' }, { ssr: false })
  const md = useBreakpointValue({ base: 'sm', md: 'md', xxl: 'lg' }, { ssr: false })
  const lg = useBreakpointValue({ base: 'md', md: 'lg', xxl: 'xl' }, { ssr: false })

  return { sm, md, lg }
}

