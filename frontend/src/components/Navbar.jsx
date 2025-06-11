import { Link } from "react-router-dom";
import { PlusSquareIcon } from "@chakra-ui/icons";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";
import {
  Button,
  Container,
  Flex,
  HStack,
  Text,
  useColorMode,
} from "@chakra-ui/react";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container maxW={"1140px"} px={4}>
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{ base: "column", sm: "row" }}
      >
        <Text
          fontSize={{ base: "24px", sm: "28px", md: "32px", lg: "36px" }}
          fontWeight={"bold"}
          textTransform={"uppercase"}
          textAlign={"center"}
          bgGradient={"linear(to-r, #73fb18, #ffb22e)"}
          bgClip={"text"}
        >
          <Link to={"/"}>Licuados y Jugos 🥤 </Link>
        </Text>

        <HStack spacing={2} alignItems={"Center"}>
          <Link to={"/Create"}>
            <Button>
              <PlusSquareIcon
                fontSize={{ base: "24px", sm: "28px", md: "32px", lg: "36px" }}
              />
            </Button>
          </Link>
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <IoMoon size="28" /> : <LuSun size="28" />}
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;
