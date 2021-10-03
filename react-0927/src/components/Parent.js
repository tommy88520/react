import React from 'react'
import Child from './Child'

function Parent() {
  return (
    <>
      <Child text="1234" name="Jake" />
      <Child />
    </>
  )
}

export default Parent
