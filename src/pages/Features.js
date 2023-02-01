import React from "react";
import Navbar from "../components/Navbar";
import { Link, Outlet } from "react-router-dom";

function Features() {
  return (
    <div data-testid="features">
      <Navbar />
      <h1 >features</h1>
      <div className="text-center m-5">
        <button className="btn btn-primary ms-5 mt-4 ">
          <Link className="text-white text-decoration-none" to="Teachers">
            Teachers
          </Link>
        </button>
        <button className="btn btn-success ms-5 mt-4 ">
          <Link className="text-white text-decoration-none" to="HausWork">
            House Cleaner
          </Link>
        </button>
      </div>

      <Outlet />
    </div>
  );
}

export default Features;
