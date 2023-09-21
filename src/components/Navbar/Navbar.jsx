import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import DrawerMenu from "./Menu";
import Navlinks from "./Navlinks";

export default function Navbar() {
  return (
    <>
      <div className="flex justify-between items-center py-4 px-4 md:px-12">
        <Link to="/" className="text-xl font-bold md:text-3xl">
          Portfolio
        </Link>
        <div></div>
        <div className="hidden md:inline-block">
        <Navlinks />
        </div>
        <div className="md:hidden">
          <DrawerMenu />
        </div>
      </div>
    </>
  );
}
