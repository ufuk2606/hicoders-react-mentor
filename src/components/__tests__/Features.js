import { render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import Features from "../../pages/Features";
import { BrowserRouter } from "react-router-dom";

test("full app rendering/navigating", async () => {
  render(<Features/>, { wrapper: BrowserRouter });

  expect(screen.getByText(/Teachers/i)).toBeInTheDocument();
});


test("full app rendering/", async () => {
    render(<Features/>, { wrapper: BrowserRouter });
  
    expect(screen.getByTestId('features')).toBeInTheDocument();
  });
