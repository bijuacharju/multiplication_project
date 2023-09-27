import React, { useContext, useEffect, useState } from "react";
import { TableContext } from "../helper/tableContext";
import { Button, Flex, Stack, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Layout from "./Layout";

const DynamicResult = () => {
  const navigate = useNavigate();
  const [multiplicatedValue, setMultiplicatedValue] = useState([]);
  const {
    multiplicationValue,
    multiplicationDepth,
    setMultiplicationValue,
    setDynamicMultiplication,
    setMultiPlicationDepth,
  } = useContext(TableContext);
  useEffect(() => {
    const tempArray = new Array(multiplicationDepth).fill(0);
    setMultiplicatedValue(
      tempArray.map((_, index) => (index + 1) * multiplicationValue)
    );
  }, [multiplicationValue, multiplicationDepth]);
  return (
    <Layout py={5}>
      <Flex justifyContent={"space-between"}>
        <Text fontWeight={"bold"} mb={5}>
          Dynamic Multiplication Result
        </Text>

        <Button
          variant="solid"
          colorScheme="blue"
          onClick={() => {
            setMultiplicationValue(0);
            setDynamicMultiplication(false);
            setMultiPlicationDepth(0);
            navigate("/");
          }}
        >
          Restart
        </Button>
      </Flex>
      <Stack gap={4}>
        {multiplicatedValue.map((item, index) => {
          return (
            <Text key={index}>
              {multiplicationValue} x {index + 1} = {item}
            </Text>
          );
        })}
      </Stack>
    </Layout>
  );
};

export default DynamicResult;
