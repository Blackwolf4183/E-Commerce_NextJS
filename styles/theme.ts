import { extendTheme } from "@chakra-ui/react"

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
}

const colors = {
   

}

const fonts = {
    heading: "Bebas Neue",
    body: "Manrope",
}

const myNewTheme = extendTheme({config,colors,fonts})

export default myNewTheme