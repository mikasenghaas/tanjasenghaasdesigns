import { Box, Flex, Text, Divider } from "@chakra-ui/react";

import PageContainer from "@/components/page-container";
import useThemeColors from "@/lib/useThemeColors";

export default function Footer() {
  const { secondary } = useThemeColors()
  return (
    <Box mt="auto" pt={20}>
      <PageContainer>
        <Divider />
        <Flex
          justifyContent="center"
          alignItems="center"
          minHeight={10}
        >
          <Text fontSize='xs' color={secondary} textAlign='center' my={1}>
            &copy; Tanja Senghaas, 2022
          </Text>
        </Flex>
      </PageContainer>
    </Box>
  );
};
