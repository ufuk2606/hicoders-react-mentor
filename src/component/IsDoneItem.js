import React from 'react'

function IsDoneItem() {
  return (
    <div>
      <ul class="list-group mt-3" data-testid="is-done-item">
        <li class="list-group-item d-flex justify-content-between align-items-start">
          <div class="ms-2 me-auto pt-1 text-decoration-line-through text-secondary">milk</div>
          <i class="bi bi-trash text-danger fs-5"></i>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
          <div class="ms-2 me-auto pt-1 text-decoration-line-through text-secondary">english exam</div>
          <i class="bi bi-trash text-danger fs-5"></i>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
          <div class="ms-2 me-auto pt-1 text-decoration-line-through text-secondary">js practical exam</div>
          <i class="bi bi-trash text-danger fs-5"></i>
        </li> 
      </ul>
    </div>
  )
}

export default IsDoneItem