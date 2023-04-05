import { BotBrainContextProvider } from "@/contexts/BotBrainContext"
import GlobalStyles from "@/styles/GlobalStyles"
import { ChakraProvider } from "@chakra-ui/react"
import type { AppProps } from "next/app"
import { Toaster } from "react-hot-toast"

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyles />
      <Toaster position="top-right" reverseOrder={false} />
      <ChakraProvider>
        <BotBrainContextProvider>
          <Component {...pageProps} />
        </BotBrainContextProvider>
      </ChakraProvider>
    </>
  )
}

export default App
