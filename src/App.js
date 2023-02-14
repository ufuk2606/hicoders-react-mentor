import React from 'react';
import './App.css';
import IsDoneTitle from './component/IsDoneTitle';
import TodoListItem from './component/TodoListItem';
import TodoTitle from './component/TodoTitle';
import IsDoneItem from './component/IsDoneItem';
import "bootstrap-icons/font/bootstrap-icons.css";
import Input from './component/Input';


function App() {


  return (
    <div>
      <div className='input m-auto'>
        <Input></Input>
      </div>
      <div className="App d-flex justify-content-center">
        <div className="todo me-3 ">
          <TodoTitle></TodoTitle>
          <TodoListItem></TodoListItem>
        </div>
        <div className="isdone">
          <IsDoneTitle></IsDoneTitle>
          <IsDoneItem></IsDoneItem>
        </div>
      </div>
    </div>
  );
}




export default App;
