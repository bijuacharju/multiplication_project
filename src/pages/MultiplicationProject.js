import { Button, FormControl, FormLabel, Input, Stack } from "@chakra-ui/react";
import React, { useContext } from "react";
import { TableContext } from "../helper/tableContext";
import { useNavigate } from "react-router-dom";
import Layout from "./Layout";

const MultiplicationProject = () => {
  const navigate = useNavigate();
  const { setMultiplicationValue } = useContext(TableContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/decision-making");
  };
  return (
    <Layout py={5}>
      <form onSubmit={handleSubmit}>
        <Stack gap={4}>
          <FormControl>
            <FormLabel>Enter a number for multiplication</FormLabel>
            <Input
              type="number"
              name="multiplication_value"
              onChange={(event) => {
                setMultiplicationValue(Number(event.target.value));
              }}
              required
            />
          </FormControl>
          <Button type="submit" colorScheme="blue" variant={"solid"}>
            Next
          </Button>
        </Stack>
      </form>
    </Layout>
  );
};

export default MultiplicationProject;
