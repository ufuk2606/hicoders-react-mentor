import { render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import Navbar from "../Navbar";
import { BrowserRouter } from "react-router-dom";

test("full app rendering/navigating", async () => {
  render(<Navbar />, { wrapper: BrowserRouter });

  expect(screen.getByTestId('navbar')).toBeInTheDocument();
});

test("full app rendering", async () => {
    render(<Navbar />, { wrapper: BrowserRouter });
  
    expect(screen.getByText(/About/i)).toBeInTheDocument();
  });