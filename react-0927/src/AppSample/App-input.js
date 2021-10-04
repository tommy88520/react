import React, { useRef } from 'react'
import Input from './components/input/inputId'
import InputRefs from './components/input/inputRefs'

function App(props) {
  const inputRef = useRef()
  return (
    <div>
      <Input />
      <Input />
      {/* 用id重複使用會壞掉 */}
      <hr />

      <InputRefs />
      <InputRefs />
    </div>
  )
}

export default App
