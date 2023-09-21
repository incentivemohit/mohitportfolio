import React from "react";
import { Typewriter } from "react-simple-typewriter";

export default function Header() {
  return (
    <>
      <div className="flex flex-col-reverse gap-2 py-5 md:grid grid-cols-2 bg-black text-white md:h-[550px]" >
        <div className="flex justify-center items-center">
          <div className="flex md:w-5/6 flex flex-col gap-2">
            <p className="text-lg md:text-4xl">Hello,I'm Mohit Kumar</p>
            <div>
              <p className="text-lg md:text-5xl ">
                <Typewriter
                  words={["Software Developer"]}
                  loop={150}
                  cursor
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </p>
            </div>
            <div className="w-full flex justify-start gap-4 md:mt-10">
              <button className="bg-blue-800 p-2  text-white rounded-lg text-md md:text-3xl">
                Download
              </button>
              <button className="bg-orange-400 p-2  text-white rounded-lg text-md md:text-3xl">
                Hire Me
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="w-28 h-28 md:w-96 md:h-96 ">
            <img
              src="/assets/images/mkk.jpg"
              className="w-full h-full rounded-full"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
