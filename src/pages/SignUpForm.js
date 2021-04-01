import React, { useState } from "react";
import {
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  CircularProgress,
} from "@chakra-ui/core";

import { userLogin } from "../utils/mockApi";
import ErrorMessage from "../components/ErrorMessage";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      await userLogin({ email, password });
      setIsLoading(false);
    } catch (error) {
      setError("Unable to Sign Up");
      setIsLoading(false);
      setEmail("");
      setPassword("");
    }
  };

  return (
    <Flex width="Full" align="center" justifyContent="center">
      <Box
        p={8}
        maxWidth="500px"
        borderWidth={1}
        borderRadius={8}
        boxShadow="lg"
      >
        <Box textAlign="center">
          <Heading> Sign Up </Heading>
        </Box>
        <Box my={4} textAlign="left">
          <form onSubmit={handleSubmit}>
            {error && <ErrorMessage message={error} />}
            <FormControl isRequired>
              <FormLabel> Name </FormLabel>
              <Input
                placeholder="Enter Name"
                size="lg"
                onChange={(event) => setName(event.currentTarget.value)}
              />
            </FormControl>
            <br/>
            <FormControl isRequired>
              <FormLabel> Email </FormLabel>
              <Input
                type="email"
                placeholder="test@test.com"
                size="lg"
                onChange={(event) => setEmail(event.currentTarget.value)}
              />
            </FormControl>
            <FormControl isRequired mt={6}>
              <FormLabel> Password </FormLabel>
              <Input
                type="password"
                placeholder="********"
                size="lg"
                onChange={(event) => setPassword(event.currentTarget.value)}
              />
            </FormControl>
            <Button
              variantColor="teal"
              variant="outline"
              width="full"
              mt={4}
              type="submit"
            >
              {isLoading ? (
                <CircularProgress isIndeterminate size="24px" color="teal" />
              ) : (
                "Sign Up"
              )}
            </Button>
            <Link to={`/signin`}>
              <label>Already have an account? Sign In </label>
            </Link>
          </form>
        </Box>
      </Box>
    </Flex>
  );
}