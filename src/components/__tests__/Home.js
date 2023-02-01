import { render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import App from "../../App";
import { BrowserRouter } from "react-router-dom";

test("full app rendering/navigating", async () => {
  render(<App />, { wrapper: BrowserRouter });

  expect(screen.getByText(/History/i)).toBeInTheDocument();
});

test("full app rendering/", async () => {
    render(<App />, { wrapper: BrowserRouter });
  
    expect(screen.getByTestId('about_uns')).toBeInTheDocument();
  });
