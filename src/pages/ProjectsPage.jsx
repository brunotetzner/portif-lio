import { CardProject } from "../components/cardProject";
import { projectsMock } from "../mocks/projects";
import { Header } from "../components/header";
import {
  Flex,
  Heading,
  Box,
  Radio,
  RadioGroup,
  Stack,
  Select,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import HeaderImage from "../assets/images/background-header.png";

export const ProjectsPage = () => {
  const [typeProject, setTypeProject] = useState("All");
  const [currentProjects, setCurrentProjects] = useState([]);

  useEffect(() => {
    setCurrentProjects(
      projectsMock.filter((project) => project.type === typeProject)
    );
    if (typeProject === "All") {
      setCurrentProjects(projectsMock);
    }
  }, [typeProject]);

  return (
    <Box>
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
          <Heading fontWeight="light" w="100%" fontSize={["50px", "80px"]}>
            Projetos
          </Heading>
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
          <RadioGroup
            onChange={setTypeProject}
            value={typeProject}
            w="70%"
            display={["none", "none", "inherit"]}
          >
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
          <Select
            display={["inherit", "inherit", "none"]}
            onChange={(evt) => setTypeProject(evt.target.value)}
            w="200px"
          >
            <option value="All">Tudo</option>
            <option value="Front End">Front End</option>
            <option value="Back End">Back End</option>
            <option value="Full Stack">Full Stack</option>
          </Select>
        </Box>
      </Box>
      <Flex
        pt="5%"
        color="white.primary"
        w={["100vw", "95vw"]}
        ml={["0", "2.5vw"]}
        flexDirection="column"
      >
        <Box
          w={["auto", "100%"]}
          marginLeft={["5%", "0"]}
          display="flex"
          flexWrap={["", "wrap"]}
          justifyContent={["", "space-evenly"]}
          flexDirection={["row", ""]}
          overflow={["auto", "hidden"]}
        >
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
