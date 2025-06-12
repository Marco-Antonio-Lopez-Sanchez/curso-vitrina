import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Createpage from "./pages/CreatePage";
import Navbar from "./components/Navbar";
import HomePage from "./pages/Homepage";
import { useColorModeValue } from "@chakra-ui/react";

prompt(`¿Cual es tu nombre?`);
Prompt(`¿Cual es tu Villa?`);


function App() {
  return (
    <>
      <Box minH={"100vh"} bg={useColorModeValue("yellow.100", "gray.700")}>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<Createpage />} />
        </Routes>
      </Box>
    </>
  );
}

export default App;
