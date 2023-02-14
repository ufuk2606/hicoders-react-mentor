import React, { useContext } from "react";
import { ToDoListDataContext } from "../contexts/TodoListDataContext";

function IsDoneItem() {
  const { isDoneListData, setIsDoneListData } = useContext(ToDoListDataContext);
  const { todoListData, setTodoListData } = useContext(ToDoListDataContext);

  const addTodoList = (pValue, e, index) => {
    e.preventDefault();
    setTodoListData([...todoListData, { value: pValue }]);
    itemDelete(index);
  };

  const itemDelete = (pIndex) => {
    setIsDoneListData(isDoneListData.filter((item,index)=>pIndex !==index));
  };

  const isDoneListTemplate = isDoneListData.map((item, index) => (
    <li
      className="list-group-item d-flex justify-content-between align-items-start"
      key={index}
    >
      <div className="ms-2 me-auto pt-1 text-decoration-line-through text-secondary">
        {item.value}
      </div>
      <button
        className="bg-white border-0"
        onClick={(e) => addTodoList(item.value, e, index)}
      >
        <i className="bi bi-arrow-left bg-danger text-white rounded-1 px-1 fs-5"></i>
      </button>
      <button
        className="bg-white border-0"
        type="button"
        onClick={(e) => itemDelete(index)}
      >
        <i className="bi bi-trash text-danger fs-5"></i>
      </button>
    </li>
  ));

  return (
    <div>
      <ul className="list-group mt-3" data-testid="is-done-item">
        {isDoneListTemplate}
      </ul>
    </div>
  );
}

export default IsDoneItem;
