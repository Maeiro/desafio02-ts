import { Box, Button, Center, Input } from "@chakra-ui/react";
import { login } from "../../services/login";

// interface ICard {
//   id: number;
//   paragraph: string;
//   details: string;
// }

// export const Card = ({ id, paragraph, details }: ICard) => {
//   console.log(id);
//   return (
//     <div>
//       <h1>Card {id}</h1>
//       <p>{paragraph}</p>
//       <p>{details}</p>
//     </div>
//   );
// };

export const Card = () => {
  return (
    <Box minHeight="100vh" backgroundColor={"#1E192C"} padding={25}>
      {" "}
      <Center marginTop="10%">
        <Box
          backgroundColor={"white"}
          borderRadius={25}
          padding={5}
          width={400}
        >
          <Center marginBottom={3}>
            <h1>Faça o login</h1>
          </Center>
          <Input placeholder="Email" />
          <Input placeholder="Senha" />
          <Center marginTop={5}>
            {" "}
            <Button onClick={login} colorScheme="blue" size={"sm"} width="100%">
              Entrar
            </Button>
          </Center>
        </Box>
      </Center>
    </Box>
  );
};
