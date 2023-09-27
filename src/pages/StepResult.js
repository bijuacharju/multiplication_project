import { Button, Flex, Stack, Text } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { TableContext } from "../helper/tableContext";
import { useNavigate } from "react-router-dom";
import Layout from "./Layout";

const StepResult = () => {
  const navigate = useNavigate();
  const [multiplicatedValue, setMultiplicatedValue] = useState([]);
  const {
    multiplicationValue,
    setMultiplicationValue,
    setDynamicMultiplication,
    setMultiPlicationDepth,
  } = useContext(TableContext);
  useEffect(() => {
    setMultiplicatedValue([multiplicationValue]);
  }, [multiplicationValue]);
  return (
    <Layout>
      <Flex justifyContent={"space-between"}>
        <Text fontWeight={"bold"} mb={5}>
          Step-By-Step Multiplication Result
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
        <Button
          variant="solid"
          colorScheme="blue"
          onClick={() => {
            setMultiplicatedValue((prev) => [
              ...prev,
              (prev.length + 1) * multiplicationValue,
            ]);
          }}
        >
          Add Another
        </Button>
      </Stack>
    </Layout>
  );
};

export default StepResult;
