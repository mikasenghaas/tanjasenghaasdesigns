import { Box } from "@chakra-ui/react";

const PageContainer = ({ children, ...props }: any) => {
  return (
    <Box mx="auto" px="30px" maxWidth={{ "base": "900px", "xxl": "1200px" }} {...props}>
      {children}
    </Box>
  );
};

export default PageContainer;
