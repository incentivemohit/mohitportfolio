import React from 'react'
import { HashLink as Link } from "react-router-hash-link";

export default function Navlinks() {
  return (
    <>
     <ul className=" md:flex gap-4">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link smooth to="/#education">
            <li>Education</li>
          </Link>
          <Link smooth to="/#experience">
            <li>Experience</li>
          </Link>
          <Link smooth to="/#projects">
            <li>Projects</li>
          </Link>
          <Link smooth to="/#skills">
            <li>Skills</li>
          </Link>
          <Link smooth to="/#about">
            <li>About</li>
          </Link>
          <Link smooth to="/#contact">
            <li>Contact</li>
          </Link>
        </ul>
    </>
  )
}
