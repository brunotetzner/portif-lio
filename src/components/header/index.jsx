import { Box, Button, Flex, Image, Center, Input } from "@chakra-ui/react";
import Logo from "../../assets/images/header-logo.svg";
import { useNavigate } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
export const Header = () => {
  const navigate = useNavigate();
  return (
    <Box
      w="97vw"
      h="17vh"
      marginLeft="1.5vw"
      marginTop="1.5vw"
      background="black.primary"
      borderRadius="20px"
      border="2px solid"
      borderColor="white.primary"
      display="flex"
      justifyContent="flex-start"
      alignItems="center"
    >
      <Image h="90%" src={Logo} ml="2%" />
      <Flex w="40%" h="30%" justifyContent="space-evenly">
        <Button
          variant="link"
          onClick={() => navigate("/home")}
          bg="none"
          color="white.primary"
        >
          Sobre mim
        </Button>
        <Button
          variant="link"
          bg="none"
          color="white.primary"
          onClick={() => navigate("/projects")}
        >
          Projetos
        </Button>
      </Flex>
      <Center w="25%">
        <Input placeholder="pesquisar por projeto" mr="1%" bg="white.primary" />
        <Button
          bg="red.primary"
          color="white.primary"
          fontSize="20px"
          fontWeight="bold"
        >
          <BiSearch />
        </Button>
      </Center>

      <Button
        onClick={() => navigate("/contact")}
        bg="red.primary"
        color="white.primary"
        ml="5%"
      >
        Contato
      </Button>
    </Box>
  );
};
