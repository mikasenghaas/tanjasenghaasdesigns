import { Box } from "@chakra-ui/react";

const PageContainer = ({ children, ...props }: any) => {
  return (
    <Box mx="auto" px="20px" maxWidth="900px" {...props}>
      {children}
    </Box>
  );
};

export default PageContainer;
