import { Container, Text } from "@chakra-ui/react";
import React from "react";

const Layout = ({ children }) => {
  return (
    <Container py={5}>
      <Text fontSize={"2xl"} fontWeight={"bold"}>
        Dynamic Multiplication Project
      </Text>
      {children}
    </Container>
  );
};

export default Layout;
