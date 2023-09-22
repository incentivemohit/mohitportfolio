import { Card, CardBody } from "@chakra-ui/react";
import React from "react";
import ImageComponent from "../ImageComponent";

export default function Experience() {
  return (
    <>
      <Card className="md:w-5/6 my-2 mx-auto">
        <CardBody className=" md:flex gap-2 lg:flex flex-row">
          <div className="w-full h-60 lg:h-52 w-2/5">
            <ImageComponent photo="https://s3images.zee5.com/wp-content/uploads/2022/02/NIIT_-_Logo2022021610443620220216104914.jpg" />
          </div>
          <div>
            <p className="text-2xl">Software Developer Trainee</p>
            <p className="text-lg ">NIIT Limited</p>
            <p className="text-md text-gray-400">Jan/2022-May/2022</p>
            <ul className="flex flex-col gap-1 my-2">
              <li>
                -Participated in internal development team meetings and
                collaborated on project scope, working to refine resourcing and
                provide development timelines for completion.
              </li>
              <li>
                -Optimized 1000+ problems as well as conducted unit tests to
                ensure desirable user experiences.
              </li>
              <li>
                -Completed 10+ projects on weekly basis and learnt 5+
                technologies such as Java, Html, CSS, JavaScript, React, Spring
                boot and MYSQL.
              </li>
            </ul>
          </div>
        </CardBody>
      </Card>
    </>
  );
}
