import { render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import App from "../../App";
import { BrowserRouter } from "react-router-dom";

test("full app rendering/navigating", async () => {
  render(<App/>, { wrapper: BrowserRouter });

  expect(screen.getByTestId('title-Home')).toBeInTheDocument();
});


test("full app rendering", async () => {
    render(<App />, { wrapper: BrowserRouter });
  
    expect(screen.getByText(/Home Component/i)).toBeInTheDocument();
  });