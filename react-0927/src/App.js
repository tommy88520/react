import { useState } from 'react'
import MyButton from './components/MyButton'
function App() {
  //[得到狀態,設定狀態] = useState(初始值)
  const test = Math.floor(Math.random() * 1000)
  const [total, setTotal] = useState(test)
  return (
    <>
      <h1>{total}</h1>
      <button
        onClick={() => {
          setTotal(total + 1)
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setTotal(total - 1)
        }}
      >
        -
      </button>
      <input type="text" placeholder="heheehehehehheh" />
    </>
  )
}

export default App
