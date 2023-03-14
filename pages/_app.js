import '@/styles/globals.css'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const fonts = {
  body:'IRANSansWeb',
}
const theme= extendTheme({fonts})

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
    <Component {...pageProps} />
  </ChakraProvider>
  )
}
