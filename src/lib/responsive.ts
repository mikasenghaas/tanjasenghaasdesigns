import { useBreakpointValue } from '@chakra-ui/react'

export function useResponsiveFontSize() {
  const sm = useBreakpointValue({ base: 'xs', md: 'sm', xxl: 'md' }, { fallback: 'md', ssr: true })
  const md = useBreakpointValue({ base: 'sm', md: 'md', xxl: 'lg' }, { fallback: 'md', ssr: true })
  const lg = useBreakpointValue({ base: 'md', md: 'lg', xxl: 'xl' }, { fallback: 'md', ssr: true })
  const xl = useBreakpointValue({ base: 'lg', md: 'xl', xxl: '2xl' }, { fallback: 'md', ssr: true })

  return { sm, md, lg, xl }
}

