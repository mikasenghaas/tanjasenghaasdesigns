import { Box } from "@chakra-ui/react";

const Banner = ({ children, ...props }: any) => {
  return (
    <Box
      position="relative"
      width="100vw"
      marginLeft="-50vw"
      left="50%"
      {...props}
    >
      {children}
    </Box>
  );
};

export default Banner;
