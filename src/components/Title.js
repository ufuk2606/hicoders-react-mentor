import React from 'react'

///reusable title component
function Title({title,number}) {
  return (
    <div className='bg-orange mb-2 display-6 text-white text-start p-1'>
      {title} {number &&  <span>({number})</span>}
    </div>
  )
}

export default Title