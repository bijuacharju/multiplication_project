import { Button, Radio, RadioGroup, Stack, Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TableContext } from "../helper/tableContext";
import Layout from "./Layout";

const DecisionMaking = () => {
  const navigate = useNavigate();
  const { dynamicMultiplication, setDynamicMultiplication } =
    useContext(TableContext);

  return (
    <Layout>
      <Stack gap={4}>
        <Text fontWeight={"bold"}>
          Choose how you to view the multiplication table:
        </Text>
        <RadioGroup
          onChange={(value) => {
            setDynamicMultiplication(value === "true" ? true : false);
          }}
          value={dynamicMultiplication.toString()}
        >
          <Stack direction="row">
            <Radio value={"true"}>Dynamic</Radio>
            <Radio value={"false"}>Step-By-Step</Radio>
          </Stack>
        </RadioGroup>
        <Button
          variant={"solid"}
          colorScheme="blue"
          onClick={() => {
            if (dynamicMultiplication) {
              navigate("/depth");
            } else {
              navigate("/step-result");
            }
          }}
        >
          Next
        </Button>
      </Stack>
    </Layout>
  );
};

export default DecisionMaking;
