import { CardProject } from "../components/cardProject";
import { projectsMock } from "../mocks/projects";
import { Header } from "../components/header";
import { Flex, Heading, Box, Center, Input, Button } from "@chakra-ui/react";
import { BiSearch } from "react-icons/bi";
import { Radio, RadioGroup, Stack } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useToast } from "@chakra-ui/react";
import HeaderImage from "../assets/images/background-header.png";

export const ProjectsPage = () => {
  const toast = useToast();
  const [typeProject, setTypeProject] = useState("All");
  const [currentProjects, setCurrentProjects] = useState([]);
  const [inputValue, setInputValue] = useState([]);

  useEffect(() => {
    setCurrentProjects(
      projectsMock.filter((project) => project.type === typeProject)
    );
    if (typeProject === "All") {
      setCurrentProjects(projectsMock);
    }
  }, [typeProject]);

  const filterProjects = () => {
    setCurrentProjects(
      projectsMock.filter((project) =>
        project.name
          .toLocaleLowerCase()
          .includes(inputValue.toLocaleLowerCase())
      )
    );
    if (currentProjects.length === 0) {
      setCurrentProjects(projectsMock);
      toast({
        title: "Nenhum Resultado",
        description:
          "Nenhum projeto correspondente o valor procurado foi encontrado.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box background="radial-gradient(circle, rgba(45,46,75,1) 0%, rgba(13,14,24,1) 51%, rgba(45,46,75,1) 100%)">
      <Box
        maxWidth="100vw"
        display="flex"
        flexDirection="column"
        backgroundImage={HeaderImage}
        backgroundSize="cover"
      >
        <Header />
        <Flex
          h="300px"
          flexDirection="row"
          alignItems="center"
          w="80vw"
          color="white.primary"
          ml="10vw"
        >
          <Heading fontWeight="semibold" w="100%">
            Projetos
          </Heading>
          <Center w="70%">
            <Input
              color="black"
              onChange={(evt) => setInputValue(evt.target.value)}
              placeholder="pesquisar por projeto"
              mr="1%"
              bg="white.primary"
            />
            <Button
              onClick={filterProjects}
              bg="none"
              border="1px solid"
              borderColor="white.primary"
              color="white.primary"
              fontSize="20px"
              fontWeight="800"
            >
              <BiSearch />
            </Button>
          </Center>
        </Flex>
        <Box
          w="100%"
          bg="rgb(28, 28, 33,0.7)"
          h="38px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          color="white.primary"
        >
          <RadioGroup onChange={setTypeProject} value={typeProject} w="70%">
            <Stack direction="row" w="100%">
              <Radio colorScheme="purple" value="All" pl="12%">
                Tudo
              </Radio>
              <Radio colorScheme="purple" value="Front End" pl="12%">
                Front End
              </Radio>
              <Radio colorScheme="purple" value="Back End" pl="12%">
                Back End
              </Radio>
              <Radio colorScheme="purple" value="Full Stack" pl="12%">
                Full Stack
              </Radio>
            </Stack>
          </RadioGroup>
        </Box>
      </Box>
      <Flex
        pt="5%"
        color="white.primary"
        w="95vw"
        ml="2.5vw"
        flexDirection="column"
      >
        <Box w="100%" display="flex" flexWrap="wrap">
          {currentProjects.map((project) => (
            <CardProject
              name={project.name}
              background={project.background}
              screen={project.screen}
              tecnologies={project.tecnologies}
              logo={project.logo}
              logoSize={project.logoSize}
              figmaLink={project.figmaLink}
              githubLink={project.githubLink}
              deployLink={project.deployLink}
              description={project.description}
              color={project.color}
            />
          ))}
        </Box>
      </Flex>
      <Box w="100%" h="50px"></Box>
    </Box>
  );
};
