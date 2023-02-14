import React, { useContext } from "react";
import {ToDoListDataContext} from "../contexts/TodoListDataContext"

function Input() {
  const {todoListItem, setTodoListItem} = useContext(ToDoListDataContext);
  const { todoListData, setTodoListData } = useContext(ToDoListDataContext);

  const addTodoList = (pValue, e) => {
    e.preventDefault();
    setTodoListData([...todoListData, { value: pValue }]);
    clearInput();
  };

  const clearInput = () => {
    setTodoListItem(" ");
  };

  return (
    <form className="input-group mb-3 mt-5" data-testid="input">
      <input
        type="text"
        value={todoListItem}
        onChange={(e) => setTodoListItem(e.target.value)}
        className="form-control"
      ></input>
      <button
        className="btn btn-outline-secondary bg-info text-white"
        type="button"
        onClick={(e) => addTodoList(todoListItem, e)}
        data-testid="button"
      >
        Add Todo
      </button>
    </form>
  );
}

export default Input;
