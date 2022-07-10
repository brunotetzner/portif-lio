import { Header } from "../components/header";
import {
  Center,
  Box,
  Flex,
  Button,
  Text,
  Link,
  Heading,
} from "@chakra-ui/react";

import Background from "../assets/images/home-background.svg";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";
import { SiGmail } from "react-icons/si";
export const ContactPage = () => {
  return (
    <Box
      backgroundImage={Background}
      backgroundSize="cover"
      backgroundPosition="center"
      h="100vh"
      w="100vw"
    >
      <Header />
      <Heading
        color="white.primary"
        w="100%"
        textAlign="center"
        mt="8%"
        mb="4%"
      >
        Contato
      </Heading>

      <Box
        w="30vw"
        ml="35vw"
        display="flex"
        flexDirection="column"
        justifyContent="space-evenly"
        alignItems="center"
        color="white.primary"
      >
        <Link
          href="https://www.linkedin.com/in/bruno-tetzner/"
          target="blank"
          h="80px"
          w="260px"
          display="flex"
          flexDirection="row"
          justifyContent="flex-start"
          alignItems="center"
          fontSize="30px"
        >
          <AiOutlineLinkedin />
          <Text pl="10px" fontSize="15px">
            linkedin.com/in/bruno-tetzner/
          </Text>
        </Link>
        <Link
          href="https://github.com/brunotetzner"
          target="blank"
          w="260px"
          h="80px"
          borderRadius="10px"
          display="flex"
          flexDirection="row"
          justifyContent="flex-start"
          alignItems="center"
          fontSize="30px"
        >
          <FiGithub />
          <Text pl="10px" fontSize="15px">
            github.com/brunotetzner
          </Text>
        </Link>
        <Box
          w="260px"
          h="80px"
          borderRadius="10px"
          display="flex"
          flexDirection="row"
          justifyContent="flex-start"
          alignItems="center"
          fontSize="30px"
        >
          <SiGmail />
          <Text pl="10px" fontSize="15px">
            brunoltetzner@gmail.com
          </Text>
        </Box>
      </Box>
    </Box>
  );
};
