import React from "react";

function TodoListItem() {
  return (
    <div>
      <ul class="list-group mt-3" data-testid="todo-list">
        <li class="list-group-item d-flex justify-content-between align-items-start">
          <div class="ms-2 me-auto pt-1">go shopping</div>
          <i class="bi bi-arrow-right bg-success text-white rounded-1 px-1 fs-5"></i>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
          <div class="ms-2 me-auto pt-1">school</div>
          <i class="bi bi-arrow-right bg-success text-white rounded-1 px-1 fs-5"></i>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
          <div class="ms-2 me-auto pt-1">take drugs</div>
          <i class="bi bi-arrow-right bg-success text-white rounded-1 px-1 fs-5"></i>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
          <div class="ms-2 me-auto pt-1">birthday party</div>
          <i class="bi bi-arrow-right bg-success text-white rounded-1 px-1 fs-5"></i>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
          <div class="ms-2 me-auto pt-1">learn react</div>
          <i class="bi bi-arrow-right bg-success text-white rounded-1 px-1 fs-5"></i>
        </li> 
      </ul>
    </div>
  );
}

export default TodoListItem;
