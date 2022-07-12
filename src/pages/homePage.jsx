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
          pt="1%"
        >
          <Img w="100px" h="100px" src={DevImg} />

          <Text color="white.primary" pl="5%" pr="5%" pb="5%" mt="2%">
            Tecnico em mecatrônica e desenvolvedor Full Stack. Me interesso por
            tecnologia desde cedo, como toda criança nascida nos anos 2000, mas
            decidi entrar na área durante a pandemia. O boom das plataformas
            web/mobile e do mercado de tecnologia em geral foram ainda mais
            acentuadas nesse periodo. Como moro em uma cidade no interior,
            diversos serviços que já eram feitos remotamente em grandes
            metrôpoles, aqui ainda não tinham se tornado um habito, o que mudou
            a partir de 2020. E isso chamou a atenção para o tempo economizado
            com longas filas nos banco e a segurança de pagar contas
            remotamente, em especial nessa época, dentre diversos outros
            serviços que já eram feitos remotamente, como assistir filmes/séries
            em serviços de streaming.
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
