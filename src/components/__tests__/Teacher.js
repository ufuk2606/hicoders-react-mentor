import { render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import Teacher from "../../pages/Teacher";
import { BrowserRouter } from "react-router-dom";

test("Teacher rendering/navigating", async () => {
  render(<Teacher />, { wrapper: BrowserRouter });

  expect(screen.getByText(/Teacher Component/i)).toBeInTheDocument();
});


test("Teacher rendering/", async () => {
    render(<Teacher />, { wrapper: BrowserRouter });
  
    expect(screen.getByTestId('title-Teacher')).toBeInTheDocument();
  });
