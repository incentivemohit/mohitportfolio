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

export default function Footer() {
  return (
    <>
      <div className="w-5/6 mx-auto my-2">
        <div className="flex flex-col-reverse gap-2  md:grid grid-cols-2 gap-3 my-2 w-5/6 mx-auto">
          <Card>
            <CardBody className="flex flex-col gap-3">
              <p className="w-full text-center py-1 border border-t-2 border-b-2 border-black text-3xl">
                Contact Form
              </p>

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

          <Card>
            <CardBody className="flex flex-col gap-3">
              <p className="w-full text-center py-1 border border-t-2 border-b-2 border-black text-3xl">
                Skills
              </p>
              <Skills />
            </CardBody>
          </Card>
        </div>
      </div>
    </>
  );
}
