import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux'
import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  Container,
  Flex,
  Text,
  Image,
  Box,
  Stack,
  Radio, RadioGroup
} from "@chakra-ui/react";
import { PATHS } from "../../paths";
import { useNavigate } from "react-router-dom";

import { toggle, persistState } from '../../Store/Actions'

const Result = () => {

  let navigate = useNavigate();

  const toggleValue = useSelector(state => state.toggleValue);
  const dispatch = useDispatch()

  const handleToggle = () => {
    dispatch(toggle())
    dispatch(persistState({ toggleValue }))
  }

  const { result } = useParams();
  const [searchData, setSearchData] = useState();
  //   const { current, location } = searchData;

  const getResults = () => {
    axios
      .get(
        `https://api.weatherapi.com/v1/current.json?key=25a80ad6ece144dd9a294532230403&q=${result}`
      )
      .then((resp) => {
        setSearchData(resp.data);
        console.log(resp.data.current)
      })
      .catch((err) => {
        console.log(err);
        window.alert("Place not found")
        navigate(`${PATHS.HOME}`);
      });
  };
  useEffect(() => {
    getResults();
  }, []);

  return (
    <div>
      <Heading alignSelf="center" mb="10" size="4xl" colorScheme="twitter" onClick={handleToggle}>
        WEATHER DATA
      </Heading>
      <Container>
        {searchData && (
          <Card>
            <CardHeader alignSelf="center" fontSize="40px">
              {searchData.location.name}
            </CardHeader>
            <RadioGroup ml="5" defaultValue={toggleValue ? '2' : '1'} onChange={handleToggle}>
              <Stack spacing={5} direction='row'>
                <Radio colorScheme='red' value='1'>
                  Celsius
                </Radio>
                <Radio colorScheme='green' value='2'>
                  Fahrenheit
                </Radio>
              </Stack>
            </RadioGroup>
            <Flex>
              <CardBody>
                <Flex direction="column" w='250px'>
                  <Text>Country : {searchData.location.country}</Text>
                  <Text>Local Time : {searchData.location.localtime}</Text>
                  <Text>Current Cloud : {searchData.current.cloud}</Text>
                  <Text>Feels Like : {searchData.current.feelslike_c}</Text>
                  <Text>Temperature : {toggleValue ? searchData.current.temp_f : searchData.current.temp_c}</Text>
                  <Text>Humidity : {searchData.current.humidity}</Text>
                </Flex>
              </CardBody>
              <CardBody justifyContent="center" alignItems="center">
                <Box >
                  <Image src={searchData.current.condition.icon} />
                </Box>
                <Text>Condition :{searchData.current.condition.text}</Text>
              </CardBody>
            </Flex>
          </Card>
        )}
      </Container>
    </div>
  );
};

export default Result;
