import { fireEvent, render, screen } from "@testing-library/react";
// import App from "../../App";
import TodoListItem from "../TodoListItem";
import ToDoListDataContext from "../../contexts/TodoListDataContext";
// import Input from "../Input";
// import todoListItem from "../Input";
// import setTodoListItem from "../Input";
// import todoListData from "../TodoListItem";
// import setTodoListData from "../TodoListItem";

test("component handles button click", () => {
  const addItem = jest.fn();
  render(
    <ToDoListDataContext.Provider value={{ addItem }}>
      <TodoListItem />
    </ToDoListDataContext.Provider>
  );
  fireEvent.click(screen.getByTestId("deneme"));
  expect(addItem).toHaveBeenCalledTimes(1);
});

// test("todo list rendered", () => {
//   render(<TodoListItem />);

//   const todoTitle = screen.getByTestId("todo-list");
//   expect(todoTitle).toBeInTheDocument();
//   // expect(screen.getByText("go shopping")).toBeInTheDocument();
//   // expect(screen.getByText("school")).toBeInTheDocument();
//   // expect(screen.getByText("take drugs")).toBeInTheDocument();
//   // expect(screen.getByText("birthday party")).toBeInTheDocument();
//   // expect(screen.getByText("learn react")).toBeInTheDocument();
// });

// test("UserGreeter salutes an anonymous user", () => {
//   render(
//     <ToDoListDataContext.Provider value={{ todoListItem, setTodoListItem }}>
//       <TodoListItem />
//     </ToDoListDataContext.Provider>
//   );
//   expect(screen.getByText("TODO LIST")).toBeInTheDocument();
// });

// const inputEl = screen.getByTestId("my-input");
// const pEl = screen.getByTestId("my-paragraf");

// fireEvent.change(inputEl, { target: { value: "ufuk" } });
// expect(pEl).toHaveTextContent("ufuk");

// test("should input value todolist", () => {
//   const itemValueEl =  { target: { value: "ufuk" }} ;
//   render(
//     <ToDoListDataContext.Provider
//       value={{itemValueEl}}
//     >
//       <App/>
//     </ToDoListDataContext.Provider>
//   );

//   fireEvent.click(itemValueEl);
//   expect(screen.getByTestId("todo-list")).toHaveTextContent("ufuk");
// });
