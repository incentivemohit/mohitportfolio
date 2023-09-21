import React from "react";
import { projects } from "../ProjectsApi";
import Card from "./Card";

export default function Projects() {
 
  return (
    <>
      <div className="w-5/6 mx-auto ">
        <div className="grid grid-cols-2 md:grid-cols-3 justify-items-center gap-3 py-4  ">
          {projects.map((item) => {
            return <Card projectCard={item} />;
          })}
        </div>
      </div>
    </>
  );
}
