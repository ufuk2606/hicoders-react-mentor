import { createContext, useState } from "react";

export const ToDoListDataContext = createContext();

const ToDoListDataContextProvider = ({ children }) => {
  const [todoListItem, setTodoListItem] = useState();
  const [todoListData, setTodoListData] = useState([]);
  const [isDoneListData, setIsDoneListData] = useState([]);

  return (
    <ToDoListDataContext.Provider
      value={{
        todoListData,
        setTodoListData,
        isDoneListData,
        setIsDoneListData,
        todoListItem,
        setTodoListItem,
      }}
    >
      {children}
    </ToDoListDataContext.Provider>
  );
};

export default ToDoListDataContextProvider;
