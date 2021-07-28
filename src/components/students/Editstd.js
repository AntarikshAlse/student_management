import React from 'react';
import {NavLink} from "react-router-dom";
import {
    Input,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    RadioGroup,HStack,Radio,Button,NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
  } from "@chakra-ui/react";

function Editstd() {
    return (
        <div style={{width:"40%",margin:"4rem auto",padding:"20px",borderRadius:"8px",backgroundColor:" aliceblue"}}>
            <h2>Edit Details</h2>
  <FormControl id="first-name" isRequired>
  <FormLabel>First name</FormLabel>
  <Input placeholder="First name" />
</FormControl>

  <FormControl id="last-name" isRequired>
  <FormLabel>Last name</FormLabel>
  <Input placeholder="Last name" />
</FormControl>

<FormControl id="grade">
  <FormLabel>Grade</FormLabel>
  <NumberInput max={99} min={10}>
    <NumberInputField />
    <NumberInputStepper>
      <NumberIncrementStepper />
      <NumberDecrementStepper />
    </NumberInputStepper>
  </NumberInput>
</FormControl>

<FormControl id="dob" isRequired>
  <FormLabel>Date of birth</FormLabel>
  <Input type="date" placeholder="Last name" />
</FormControl>

<FormControl as="fieldset">
  <FormLabel as="gender">Gender</FormLabel>
  <RadioGroup>
    <HStack spacing="24px">
      <Radio value="Male">Male</Radio>
      <Radio value="Female">Female</Radio>
    </HStack>
  </RadioGroup>
</FormControl>

<FormControl id="email">
  <FormLabel>Email address</FormLabel>
  <Input type="email" />
  <FormHelperText>We'll never share your email.</FormHelperText>
</FormControl>

<FormControl id="phone">
  <FormLabel>Phone</FormLabel>
  <Input type="number" maxLength="10"/>
</FormControl>

<FormControl id="address">
  <FormLabel>Address</FormLabel>
  <Input type="text"/>
</FormControl>

<FormControl>
<Button colorScheme="blue"  type="submit" mt={4}>Submit</Button>&nbsp;
<NavLink to = "/">
<Button colorScheme="red" mt={4}>Cancel</Button>
</NavLink>
</FormControl>
            
        </div>
    )
}

export default Editstd
