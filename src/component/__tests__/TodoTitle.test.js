import {render,screen } from "@testing-library/react";
import TodoTitle from "../TodoTitle";

test("todo title rendered",()=>{
    render(<TodoTitle/>)

    const todoTitle = screen.getByTestId("todo-title");
    expect(todoTitle).toBeInTheDocument();
    expect(screen.getByText("TODO LIST")).toBeInTheDocument();
})
