import { Container, VStack, Box, Heading, Text, Flex, Spacer, IconButton } from "@chakra-ui/react";
import { FaHome, FaInfoCircle } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex as="nav" bg="blue.500" color="white" p={4} align="center">
        <Heading size="md">MyApp</Heading>
        <Spacer />
        <IconButton aria-label="Home" icon={<FaHome />} variant="ghost" color="white" />
        <IconButton aria-label="About" icon={<FaInfoCircle />} variant="ghost" color="white" />
      </Flex>
      <Box p={4}>
        <VStack spacing={4} align="stretch">
          <Heading as="h1" size="xl" textAlign="center">Welcome to MyApp</Heading>
          <Text fontSize="lg" textAlign="center">This is your placeholder content. Start building your app here.</Text>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;