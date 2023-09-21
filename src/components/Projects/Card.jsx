import React from "react";
import ImageComponent from "../ImageComponent";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";

export default function Card({ projectCard }) {
  return (
    <>
      <div className="w-40  md:w-52 lg:w-80 flex flex-col gap-2 cursor-pointer  bg-white pt-2 px-2 rounded-lg hover:scale-105 ">
        <div className="md:h-[120px] lg:h-[180px]">
          <ImageComponent photo={`${projectCard.Image}`} />
        </div>

        <div className=" lg:flex justify-between items-center p-2 ">
          <p className=" text-md lg:text-lg text-start font-bold py-1">
            {projectCard.title}&nbsp;({projectCard.projectsList.length})
          </p>
          <Link to={`/projects/${projectCard.id}`}>
            <Button colorScheme="blue" className="w-full md:w-full lg:w-24">
              View
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
