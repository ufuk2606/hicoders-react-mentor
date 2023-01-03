import React from 'react'

function Input() {
  return (
    <div class="input-group mb-3 mt-5" data-testid="input">
      <input type="text" class="form-control"></input>
      <button class="btn btn-outline-secondary bg-info text-white" type="button" data-testid="button">Add Todo</button>
    </div>
  )
}

export default Input