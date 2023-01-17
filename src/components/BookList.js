import React from 'react'
import FormSelect from './FormSelect'

function BookList({book, setSelectedCategory}) {
  return (
    <div>
        <FormSelect book={book} setSelectedCategory={setSelectedCategory}/>
    </div>
  )
}

export default BookList