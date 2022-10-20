import { useBreakpointValue } from '@chakra-ui/react'

export default function useResponsiveFontSizes() {
  const xs = useBreakpointValue(
    { base: 'xs', md: 'xs', xxl: 'sm' },
    { fallback: 'md', ssr: true }
  )
  const sm = useBreakpointValue(
    { base: 'sm', md: 'sm', xxl: 'md' },
    { fallback: 'md', ssr: true }
  )
  const md = useBreakpointValue(
    { base: 'md', md: 'md', xxl: 'lg' },
    { fallback: 'md', ssr: true }
  )
  const lg = useBreakpointValue(
    { base: 'md', md: 'lg', xxl: 'xl' },
    { fallback: 'md', ssr: true }
  )
  const xl = useBreakpointValue(
    { base: 'xl', md: 'xl', xxl: '2xl' },
    { fallback: 'md', ssr: true }
  )

  return { xs, sm, md, lg, xl }
}
