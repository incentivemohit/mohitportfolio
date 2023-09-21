import React from "react";
import Header from "./Header/Header";
import Projects from "./Projects/Projects";
import Education from "./Education/Education";
import Experience from "./Experience/Experience";

import Footer from "./Footer/Footer";
import HeadLine from "./HeadLine";

export default function Home() {
  return (
    <>
      <main className="w-full h-full flex flex-col gap-1">
        <section>
          <Header />
        </section>
        <section className="bg-gray-200" id="education">
          <HeadLine headline="Education"/>
          <Education />
        </section>
        <section className="bg-gray-200" id="experience">
        <HeadLine headline="Work Experience"/>
          <Experience />
        </section>
        <section className="flex flex-col gap-2" id="projects">
        <HeadLine headline="Projects"/>
          <div className="bg-black ">
            <Projects />
          </div>
        </section>
        <section className="bg-gray-900 mb-1">
          <Footer />
        </section>
      </main>
    </>
  );
}
