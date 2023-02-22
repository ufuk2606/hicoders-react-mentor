import React from "react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import '../index.css'

function Navigate() {
  const { totalCounter } = useContext(ProductContext);

  return (
    <div
      className="App navbar text-decoration-none d-flex align-content-center"
      style={{ height: "50px" }}
    >
      <NavLink className="mx-5 text-decoration-none text-white fs-4 " to="/">
        Home
      </NavLink>
      <NavLink className="mx-5 text-decoration-none text-white fs-4" to="Products">
        Products
      </NavLink>
      <NavLink className="mx-5 text-decoration-none text-white" to="Cart">
        <button type="button" className="btn text-white">
          <i className="bi bi-cart fs-3"></i>{" "}
          <span className="badge text-bg-danger">{totalCounter}</span>
        </button>
      </NavLink>
    </div>
  );
}

export default Navigate;
