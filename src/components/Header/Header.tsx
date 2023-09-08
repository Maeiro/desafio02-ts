import { Button, Flex } from "@chakra-ui/react";
import { Logo } from "../Logo/Logo";

export const Header = () => {
  return (
    <Flex
      align="center"
      justify="space-between"
      w="100%"
      p={5}
      backgroundColor={"#151515"}
    >
      <Logo />
      <Button left={575}>Entrar</Button>
      <Button>Criar Conta</Button>
    </Flex>
  );
};
