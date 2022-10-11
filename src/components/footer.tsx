import { Box, Flex, Text, Divider } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box marginTop="auto" mt={20}>
      <Divider />
      <Flex
        justifyContent="center"
        alignItems="center"
        minHeight={10}
      >
        <Text fontSize='xs' color='blackAlpha.700' textAlign='center' my={1}>
          &copy; Tanja Senghaas, 2022
        </Text>
      </Flex>
    </Box>
  );
};
