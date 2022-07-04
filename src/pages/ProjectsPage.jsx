import { Header } from "../components/header";
import { Flex, Heading } from "@chakra-ui/react";
export const ProjectsPage = () => {
  return (
    <>
      <Header />
      <Flex pt="5%" color="white.primary" w="90vw" ml="5vw">
        <Heading fontWeight="semibold" w="100%">
          Projetos
        </Heading>
      </Flex>
    </>
  );
};
