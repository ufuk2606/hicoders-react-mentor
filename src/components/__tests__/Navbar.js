import { render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import Navbar from "../Navbar";
import { BrowserRouter } from "react-router-dom";

test("navbar rendering/navigating", async () => {
  render(<Navbar />, { wrapper: BrowserRouter });

  expect(screen.getByTestId('navbar')).toBeInTheDocument();
});

test("navbar rendering", async () => {
    render(<Navbar />, { wrapper: BrowserRouter });
  
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
  });