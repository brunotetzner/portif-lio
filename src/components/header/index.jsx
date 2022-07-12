import {
  Box,
  Button,
  Flex,
  Image,
  Center,
  useDisclosure,
} from "@chakra-ui/react";
import Logo from "../../assets/images/header-logo.svg";
import { useNavigate } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";

import { ModalHeaderMenu } from "../modalHeaderMenu";

export const Header = () => {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
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
      <ModalHeaderMenu isOpen={isOpen} onClose={onClose} />
      <Center w="40%" display={["none", "none", "inherit", "inherit"]}>
        <Button
          variant="link"
          onClick={() => navigate("/home")}
          bg="none"
          color="white.primary"
        >
          Sobre mim
        </Button>
      </Center>
      <Flex
        h="100%"
        w={["100%", "100%", "20%"]}
        justifyContent={["flex-start", "flex-start", "center"]}
        pl={["5%", "5%", "0"]}
      >
        <Image h="100%" src={Logo} />
      </Flex>
      <Button
        color="white.primary"
        fontSize="30px"
        bg="none"
        display={["inherit", "inherit", "none"]}
        onClick={onOpen}
      >
        <AiOutlineMenu />
      </Button>
      <Flex
        w="40%"
        display={["none", "none", "inherit", "inherit"]}
        justifyContent="space-evenly"
      >
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
