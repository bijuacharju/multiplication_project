import { Button, FormControl, FormLabel, Input, Stack } from "@chakra-ui/react";
import React, { useContext } from "react";
import { TableContext } from "../helper/tableContext";
import { useNavigate } from "react-router-dom";
import Layout from "./Layout";

const Dept = () => {
  const navigate = useNavigate();
  const { setMultiPlicationDepth } = useContext(TableContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/dynamic-result");
  };
  return (
    <Layout>
      <form onSubmit={handleSubmit}>
        <Stack gap={4}>
          <FormControl>
            <FormLabel>Enter depth level for multiplication</FormLabel>
            <Input
              type="number"
              name="multiplication_value"
              onChange={(event) => {
                setMultiPlicationDepth(Number(event.target.value));
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

export default Dept;
