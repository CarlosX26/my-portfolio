import React from "react";
import { Toaster } from "react-hot-toast";
import { ChakraProvider } from "@chakra-ui/react";
import { Home } from "./pages/Home";
import GlobalStyles from "./styles/GlobalStyles";

const App = () => {
    return (
        <>
            <GlobalStyles />
            <Toaster position="top-right" reverseOrder={false} />
            <ChakraProvider>
                <Home />
            </ChakraProvider>
        </>
    );
};

export default App;
