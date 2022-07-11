import {
  Box,
  Flex,
  Heading,
  Image,
  Center,
  Text,
  Tooltip,
  Link,
} from "@chakra-ui/react";

import FigmaBack from "../../assets/images/figma-background.svg";
import { AiFillGithub, AiOutlinePlayCircle } from "react-icons/ai";
export const CardProject = ({
  name,
  description,
  background,
  screen,
  tecnologies,
  logo,
  logoSize,
  figmaLink,
  githubLink,
  deployLink,
  color,
}) => {
  return (
    <Box
    _hover={{
      boxShadow: "-1px 1px 23px 2px #CB7CDF",

    }}
      w="390px"
      mt="2%"
      ml="2%"
      display="flex"
      flexDirection="row"
      height="250px"
      backgroundImage={background}
      backgroundSize="cover"
    >
      <Flex
        w="35%"
        h="100%"
        bg="black.secondary"
        flexDirection="column"
        justifyContent="space-between"
        padding="1%"
        borderRight="1px solid"
        borderRightColor={color}
      >
        <Heading
          w="100%"
          textAlign="center"
          fontSize="18px"
          borderBottom="1px solid"
          borderBottomColor={color}
        >
          {name}
        </Heading>
        {figmaLink ? (
          <Link
            href={figmaLink}
            target="blank"
            mt="10%"
            backgroundImage={screen}
            backgroundSize="cover"
            backgroundPosition="center"
            borderRadius="2px"
            w="125px"
            ml="1px"
            h="90px"
          >
            <Box
              borderRadius="2px"
              bg="none"
              w="100%"
              h="100%"
              _hover={{
                backgroundImage: FigmaBack,
                border: "1px solid",
                borderColor: "white.primary",
              }}
              backgroundSize="cover"
              backgroundPosition="center"
              background-repeat="no-repeat"
            />
          </Link>
        ) : (
          <Box
            borderRadius="2px"
            w="125px"
            ml="1px"
            h="90px"
            backgroundImage={screen}
            backgroundPosition="center"
            backgroundSize="cover"
          />
        )}

        <Flex w="100%" justifyContent="space-around" alignItems="center">
          <Link
            _hover={{color:"#CB7CDF"}}
            href={githubLink}
            target="blank"
            bg="none"
            display="flex"
            flexDirection="column"
            alignItems="center"
            fontSize="30px"
            fontWeight="light"
            w="50px"
            h="50px"
          >
            <Center>
              <AiFillGithub />
            </Center>
            <Text fontSize="12px">github</Text>
          </Link>
          {deployLink && (
            <Link
            _hover={{color:"#CB7CDF"}}
              href={deployLink}
              target="blank"
              bg="none"
              display="flex"
              flexDirection="column"
              alignItems="center"
              fontSize="30px"
              fontWeight="light"
              w="50px"
              h="50px"
            >
              <Center>
                <AiOutlinePlayCircle />
              </Center>
              <Text fontSize="12px">Aplicação</Text>
            </Link>
          )}
        </Flex>
      </Flex>
      <Flex
        w="65%"
        flexDirection="column"
        justifyContent="space-between"
        alignItems="flex-end"
      >
        <Flex w="90%" justifyContent="flex-end" flexWrap="wrap">
          {tecnologies.map((tecnologie) => (
            <Tooltip label={tecnologie.name}>
              <Center
                color="white.primary"
                fontSize="25px"
                paddingLeft="3%"
                paddingRight="3%"
                paddingTop="3%"
              >
                {tecnologie.Icon}
              </Center>
            </Tooltip>
          ))}
        </Flex>
        <Center width="80%" h="100px" mr="10%" pt="2%">
          <Text>{description}</Text>
        </Center>
        <Box
          w={`${logoSize.width}px`}
          h={`${logoSize.height}px`}
          mb="2%"
          mr="2%"
        >
          <Image src={logo} target={`${name} logo `} />
        </Box>
      </Flex>
    </Box>
  );
};
