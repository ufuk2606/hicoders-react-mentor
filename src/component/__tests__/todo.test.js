import {render,screen,cleanup } from "@testing-library/react";
import TodoTitle from "../TodoTitle";
import App from "../../App";
import TodoListItem from "../TodoListItem";
import IsDoneTitle from "../IsDoneTitle";
import IsDoneItem from "../IsDoneItem";
import Input from "../Input";

//App.js test
test("App rendered",()=>{
    render(<App/>)

    const todoTitle = screen.getByTestId("todo-title");
    expect(todoTitle).toBeInTheDocument();
})

//Todo Title componenet test
test("todo title rendered",()=>{
    render(<TodoTitle/>)

    const todoTitle = screen.getByTestId("todo-title");
    expect(todoTitle).toBeInTheDocument();
    expect(screen.getByText("TODO LIST")).toBeInTheDocument();
})

// Todo List Item componenet test
test("todo list rendered",()=>{
    render(<TodoListItem />)

    const todoTitle = screen.getByTestId("todo-list");
    expect(todoTitle).toBeInTheDocument();
    expect(screen.getByText("go shopping")).toBeInTheDocument();
    expect(screen.getByText("school")).toBeInTheDocument();
    expect(screen.getByText("take drugs")).toBeInTheDocument();
    expect(screen.getByText("birthday party")).toBeInTheDocument();
    expect(screen.getByText("learn react")).toBeInTheDocument();
})

// Is done title componenet test
test("is done title rendered",() =>{
    render(<IsDoneTitle/>)

    const todoTitle = screen.getByTestId("is-done-title");
    expect(todoTitle).toBeInTheDocument();  
    expect(screen.getByText("IS DONE")).toBeInTheDocument();  
})

//Is done item componenet test
test("is done item rendered",() =>{
    render(<IsDoneItem/>)

    const todoTitle = screen.getByTestId("is-done-item");
    expect(todoTitle).toBeInTheDocument();
    expect(screen.getByText("milk")).toBeInTheDocument();
    expect(screen.getByText("english exam")).toBeInTheDocument();
    expect(screen.getByText("js practical exam")).toBeInTheDocument();
})

// Input componenet test
test("input rendered",()=>{
    render(<Input/>)

    const input = screen.getByTestId("input")
    expect(input).toBeInTheDocument();
    const button = screen.getByTestId("button");
    expect(button).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Add Todo" }));
})