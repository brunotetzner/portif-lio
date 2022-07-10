import { Header } from "../components/header";
import { Center, Box, Flex } from "@chakra-ui/react";
export const ContactPage = () => {
  return (
    <>
      <Header />
      <Box
        w="95vw"
        h="68vh"
        m="2.5vw"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Center bg="white" h="400px" w="300px">
          Contato
          <Flex
            w="90%"
            h="60px"
            borderRadius="20px"
            bg="gray"
            flexDirection="row"
            justifuContent="space-between"
          ></Flex>
        </Center>
      </Box>
    </>
  );
};
