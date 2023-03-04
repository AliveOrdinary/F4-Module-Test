import React, { useState } from "react";
import { Input, Button, Container, Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../../paths";

const Home = () => {
  const [search, setSearch] = useState("");

  let navigate = useNavigate();

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = () => {
    navigate(`${PATHS.RESULT}/${search.replace(" ", "+")}`);
  };
  return (
    <Container pt="200px">
      <Heading colorScheme="twitter" size="4xl" mb="100px">
        Weather API
      </Heading>
      <Input placeholder="Search Location" onChange={handleChange} />
      <Button colorScheme="gray" mt="4" py="4" px="9" onClick={handleSearch}>
        Search
      </Button>
    </Container>
  );
};

export default Home;
