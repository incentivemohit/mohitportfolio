import { Button, Card, CardBody } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import ImageComponent from "../ImageComponent";
import ProductsModal from "./Modal";

export default function ProjectCard({ projects }) {
  return (
    <>
      
        {projects.map((item) => {
          return (
            <Card key={item.id} className="m-2 lg:w-80">
              <CardBody className="flex flex-col gap-2">
                <div className="lg:w-full h-36">
                  <ImageComponent photo={`${item.projectImage}`} />
                </div>
                <div className="flex flex-col gap-3">
                  <p className="text-2xl">{item.projectName}</p>
                  <div className="flex justify-between items-center gap-2">
                    <Link to={`${item.live}`}>
                      <Button  colorScheme="blue" isDisabled={item.status}>
                        Live
                      </Button>
                    </Link>
                    <Link to={`${item.github}`}>
                      <Button colorScheme="blue">Github</Button>
                    </Link>
                    <ProductsModal data={item} />
                  </div>
                </div>
              </CardBody>
            </Card>
          );
        })}
     
    </>
  );
}
