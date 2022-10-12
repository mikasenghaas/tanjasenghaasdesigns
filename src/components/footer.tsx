import { Box, Flex, Text, Divider } from "@chakra-ui/react";

import PageContainer from "@/components/page-container";

export default function Footer() {
  return (
    <Box mt="auto" pt={20}>
      <PageContainer>

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
      </PageContainer>
    </Box>
  );
};
