import { Header } from "../components/header";
import {
  Box,
  Flex,
  Center,
  Img,
  Text,
  Tooltip,
  Heading,
} from "@chakra-ui/react";
import DevImg from "../assets/images/bruno-tetzner.svg";
import { icons } from "../mocks/icons";
import Background from "../assets/images/background-home.jpg";
export const HomePage = () => {
  return (
    <Box
      backgroundImage={Background}
      backgroundSize="cover"
      backgroundPosition="center"
      h="100vh"
      w="100vw"
    >
      <Header />
      <Box
        w="95vw"
        h="68vh"
        m="2.5vw"
        display="flex"
        flexDirection={["column", "column", "row"]}
      >
        <Flex
          bg="black.secondary"
          w={["100%", "100%", "50%"]}
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          pt="1%"
        >
          <Img w="100px" h="100px" src={DevImg} />

          <Text color="white.primary" pl="5%" pr="5%" pb="5%" mt="2%">
            Técnico em mecatrônica e desenvolvedor Full Stack. Gosto do mercado
            de tecnologia devido as diversas possibilidades de resolução de
            problemas. Praticamente tudo demanda tecnologia atualmente, ela nos
            trás facilidades que poupam nosso tempo e dinheiro. Conhecimentos em
            programação podem ser aplicados para resolver problemas nas mais
            diversas áreas, e por isso tenho tanto interesse em trabalhar com
            tecnologia.
          </Text>
        </Flex>
        <Center
          w={["100%", "100%", "50%"]}
          color="white.primary"
          flexDirection="column"
        >
          <Heading w="100%" textAlign="center" pt="10%" pb="5%">
            Tecnologias
          </Heading>
          <Flex w="60%" flexWrap="wrap" h="70%" justifyContent="center">
            {icons.map((tecnologie) => (
              <Tooltip label={tecnologie.name}>
                <Center margin="3%" marginBottom="0" fontSize="50px" h="50px">
                  {tecnologie.Icon}
                </Center>
              </Tooltip>
            ))}
          </Flex>
        </Center>
      </Box>
    </Box>
  );
};
