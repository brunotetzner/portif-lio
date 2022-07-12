import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const ModalHeaderMenu = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          height="82vh"
          marginRight="auto"
          w="200px"
          background="radial-gradient(circle, rgba(45,46,75,1) 0%, rgba(13,14,24,1) 51%, rgba(45,46,75,1) 100%)"
        >
          <ModalHeader color="white.primary">Menu</ModalHeader>
          <ModalCloseButton color="white.primary" />
          <ModalBody display="flex" flexDirection="column">
            <Button
              paddingBottom="4px"
              marginBottom="14px"
              borderBottom="1px solid"
              borderColor="white.primary"
              fontWeight="light"
              bg="none"
              color="white.primary"
              onClick={() => navigate("/")}
            >
              Sobre mim
            </Button>
            <Button
              paddingBottom="4px"
              marginBottom="14px"
              borderBottom="1px solid"
              borderColor="white.primary"
              fontWeight="light"
              bg="none"
              color="white.primary"
              onClick={() => navigate("/projects")}
            >
              Projetos
            </Button>

            <Button
              paddingBottom="4px"
              marginBottom="14px"
              borderBottom="1px solid"
              borderColor="white.primary"
              bg="none"
              fontWeight="light"
              onClick={() => navigate("/contact")}
              color="white.primary"
              // ml="5%"
            >
              Contato
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
