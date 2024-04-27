import "./App.css";

import { ChakraProvider } from "@chakra-ui/react";
import Chutorial from "./Chutorial";

function App() {
  return (
    <ChakraProvider>
      <Chutorial />
    </ChakraProvider>
  );
}

export default App;
