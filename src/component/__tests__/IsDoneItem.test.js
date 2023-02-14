import {render,screen } from "@testing-library/react";
import IsDoneItem from "../IsDoneItem";

test("is done item rendered",() =>{
    render(<IsDoneItem/>)

    const todoTitle = screen.getByTestId("is-done-item");
    expect(todoTitle).toBeInTheDocument();
    // expect(screen.getByText("milk")).toBeInTheDocument();
    // expect(screen.getByText("english exam")).toBeInTheDocument();
    // expect(screen.getByText("js practical exam")).toBeInTheDocument();
})