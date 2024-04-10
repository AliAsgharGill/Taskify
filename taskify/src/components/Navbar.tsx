import React from "react";
import { Link, useSearchParams } from "react-router-dom";

const Navbar = () => {
  
  return (
    <>
      <div className="space-x-10">
        <Link to="/">All</Link>
        <Link to="/?todos=active">Active</Link>
        <Link to="/?todos=completed">Completed</Link>
      </div>
    </>
  );
};

export default Navbar;
