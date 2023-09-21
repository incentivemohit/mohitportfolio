import React from "react";
import {
  FormControl,
  FormLabel,
  Textarea ,
  Input,
  Card,
  CardBody,
  Button,
} from "@chakra-ui/react";
import Skills from "../Skills/Skills";
import HeadLine from '../HeadLine'

export default function Footer() {
  return (
    <>
    <div className="md:w-5/6 mx-auto">
    <div className="flex flex-col-reverse w-full gap-2 md:grid grid-cols-2 gap-3 mt-2 pb-2 ">
      
      <Card>
        <CardBody className="flex flex-col gap-3 ">
        <HeadLine headline="Contact Form"/>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input type="type" />
          </FormControl>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input type="type" />
          </FormControl>
          <FormControl>
            <FormLabel>Message</FormLabel>
            <Textarea placeholder='Write here...' />
          </FormControl>
          <Button colorScheme="blue">Submit</Button>
        </CardBody>
      </Card>

      <Card >
        <CardBody className="flex flex-col gap-3">
        <HeadLine headline="Skills"/>
          <Skills />
        </CardBody>
      </Card>
    
  </div>
    </div>
    </>
  );
}
