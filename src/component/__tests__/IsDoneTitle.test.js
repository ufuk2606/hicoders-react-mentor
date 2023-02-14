import {render,screen } from "@testing-library/react";
import IsDoneTitle from "../IsDoneTitle";

test("is done title rendered",() =>{
    render(<IsDoneTitle/>)

    const todoTitle = screen.getByTestId("is-done-title");
    expect(todoTitle).toBeInTheDocument();  
    expect(screen.getByText("IS DONE")).toBeInTheDocument();  
})