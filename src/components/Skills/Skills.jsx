import React from "react";
import { skills } from "../SkillsAPI";

export default function Skills() {
  return (
    <>
      <div className="bg-black rounded-lg flex  justify-center flex-wrap gap-3 p-3 mx-auto ">
        {skills.map((skill) => {
          return <span className="bg-slate-300 p-2 rounded-lg">{skill}</span>;
        })}
      </div>
    </>
  );
}
