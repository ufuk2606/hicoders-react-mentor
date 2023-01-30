import { render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import Student from "../../pages/Student";
import { BrowserRouter } from "react-router-dom";

test("Student rendering/navigating", async () => {
  render(<Student />, { wrapper: BrowserRouter });

  expect(screen.getByText(/Student Component/i)).toBeInTheDocument();
});

test("Student rendering/", async () => {
    render(<Student />, { wrapper: BrowserRouter });
  
    expect(screen.getByTestId('title-Student')).toBeInTheDocument();
  });
