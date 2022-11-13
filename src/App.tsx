import React from "react";
import { Toaster } from "react-hot-toast";
import { Home } from "./pages/Home";
import GlobalStyles from "./styles/GlobalStyles";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Toaster position="top-right" reverseOrder={false} />
      <Home />
    </>
  );
};

export default App;
