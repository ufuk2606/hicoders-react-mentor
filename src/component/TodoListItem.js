import React, { useContext } from "react";
import { ToDoListDataContext } from "../contexts/TodoListDataContext";

function TodoListItem() {
  const { todoListData, setTodoListData } = useContext(ToDoListDataContext);
  const {setTodoListItem} = useContext(ToDoListDataContext);
  const { isDoneListData, setIsDoneListData } = useContext(ToDoListDataContext);

  const addIsDoneList = (pValue, e, index) => {
    e.preventDefault();
    setIsDoneListData([...isDoneListData, { value: pValue }]);
    itemDelete(index);
  };

  const addInput = (pValue, e, index) => {
    e.preventDefault();
    setTodoListItem(pValue)
    itemDelete(index);
  }

  const itemDelete = (pIndex) => {
    setTodoListData(todoListData.filter((item,index)=>index !== pIndex));
  };

  const listItemTemplate = todoListData.map((item, index) => (
    <li
      className="list-group-item d-flex justify-content-between align-items-start"
      key={index}
    >
      <div className="ms-2 me-auto pt-1">{item.value}</div>
      <button
        className="bg-white border-0"
        onClick={(e) => addInput(item.value, e, index)}
      >
        <i className="bi bi-pencil-square bg-success text-white rounded-1 px-1 fs-5 "></i>
      </button>
      <button
        className="bg-white border-0"
        onClick={(e) => addIsDoneList(item.value, e, index)}
        data-testid="deneme"
      >
        <i className="bi bi-arrow-right bg-success text-white rounded-1 px-1 fs-5"></i>
      </button>
    </li>
  ));

  return (
    <div>
      <ul className="list-group mt-3" data-testid="todo-list">
        {listItemTemplate}
      </ul>
    </div>
  );
}

export default TodoListItem;
