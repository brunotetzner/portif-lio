import { CardProject } from "../components/cardProject";
import { projectsMock } from "../mocks/projects";
import { Header } from "../components/header";
import { Flex, Heading, Box } from "@chakra-ui/react";

export const ProjectsPage = () => {
  return (
    <>
      <Header />
      <Flex
        pt="5%"
        color="white.primary"
        w="90vw"
        ml="5vw"
        flexDirection="column"
      >
        <Heading fontWeight="semibold" w="100%">
          Projetos
        </Heading>
        <Box w="100%" display="flex" flexWrap="wrap">
          {projectsMock.map((project) => (
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
    </>
  );
};
