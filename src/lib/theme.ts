import { extendTheme } from '@chakra-ui/react'

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const fonts = {
  heading: `"Montserrat", "sans-serif"`,
  body: `"Montserrat", "sans-serif"`
}

const color = {
  brand: {
    700: '#2a69ac',
    800: '#153e75',
    900: '#1a365d',

  }
}

const breakpoints = {
  xxl: "96em"
}

const theme = extendTheme({ config, color, breakpoints })

export default theme;
