import {render,screen } from "@testing-library/react";
import Input from "../Input";

test("input rendered",()=>{
    render(<Input/>)

    const input = screen.getByTestId("input")
    expect(input).toBeInTheDocument();
    const button = screen.getByTestId("button");
    expect(button).toBeInTheDocument()
    // expect(screen.getByRole("button", { name: "Add Todo" }));
})