import { Box, Button, Flex, Image, Center, Input } from "@chakra-ui/react";
import Logo from "../../assets/images/header-logo.svg";
import { useNavigate } from "react-router-dom";
export const Header = () => {
  const navigate = useNavigate();
  return (
    <Box
      w="97vw"
      h="12vh"
      marginLeft="1.5vw"
      borderRadius="20px"
      display="flex"
      justifyContent="space-evenly"
      alignItems="center"
    >
      <Center w="40%">

        <Button
          variant="link"
          onClick={() => navigate("/home")}
          bg="none"
          color="white.primary"
        >
          Sobre mim
        </Button>
          </Center>
        <Center h="100%" >
      <Image h="100%" src={Logo}  />
          </Center>
          <Flex w="40%" justifyContent="space-evenly">


        <Button
          variant="link"
          bg="none"
          color="white.primary"
          onClick={() => navigate("/projects")}
        >
          Projetos
        </Button>
 

      <Button
          variant="link"

          onClick={() => navigate("/contact")}
          color="white.primary"
          // ml="5%"
          >
        Contato
      </Button>
        </Flex>
    </Box>
  );
};
