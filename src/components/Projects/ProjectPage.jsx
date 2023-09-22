import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import {projects} from '../ProjectsApi'

export default function ProjectPage() {
  const { id } = useParams();
  const [projectData, setProjectData] = useState([]);

  const load = () => {
    const data = projects.filter((item) => item.id == id);
    setProjectData(data);
  };

  useEffect(() => {
    load();
  }, [id]);

  return (
    <>
      {projectData.map((item) => {
        return (
          <p className="text-3xl text-center py-1 bg-black text-white">
            {item.title} Projects
          </p>
        );
      })}

      <div className="w-full  bg-slate-100 py-4 ">
        <div className="w-5/6 mx-auto  lg:flex justify-center gap-3">
          {projectData.map((items) => {
            return <ProjectCard projects={items.projectsList} />;
          })}
        </div>
      </div>
    </>
  );
}
