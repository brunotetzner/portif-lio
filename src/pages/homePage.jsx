import { Header } from "../components/header";
import { Box, Flex, Center, Img, Text, Tooltip } from "@chakra-ui/react";
import DevImg from "../assets/images/bruno-tetzner.svg";
import { icons } from "../mocks/icons";
import Background from "../assets/images/home-background.svg"
export const HomePage = () => {
  return (
    <Box backgroundImage={Background} backgroundSize="cover" backgroundPosition="center" h="100vh" w="100vw">
      <Header />
      <Box w="95vw" h="68vh" m="2.5vw" display="flex" flexDirection="row">
        <Flex
          bg="black.secondary"
          w="50%"
          flexDirection="column"
          alignItems="center"
          pt="1%"
        >
          <Img w="100px" h="100px" src={DevImg} />

          <Text color="white.primary" pl="5%" pr="5%" pb="5%" mt="2%">
            Tecnico em mecatrônica, desenvolvedor Full Stack e leitor nas horas
            vagas. Ou melhor, quando os bugs de código dão tregua. Me interesso
            por tecnologia desde cedo, como toda criança nascida nos anos 2000.
            Mas decidi entrar na área durante a pandemia. O boom das plataformas
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
        <Center w="50%" color="white.primary">
          <Flex w="60%" flexWrap="wrap" h="70%">
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
