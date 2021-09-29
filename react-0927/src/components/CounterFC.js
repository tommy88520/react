import { useState } from 'react'
function CounterFC() {
  //[得到狀態,設定狀態] = useState(初始值)
  const RandomNumber = Math.floor(Math.random() * 1000)
  const [total, setTotal] = useState(RandomNumber)
  return (
    <>
      <h1
        onClick={() => {
          const NewTotal = total + 1 //同步
          setTotal(NewTotal) // 非同步 react改變dom元素
          console.log(NewTotal) //輸出最後狀態職
        }}
      >
        {total}
      </h1>

      <h1
        onClick={() => {
          setTotal(total + 1) // 非同步 react改變dom元素
          console.log(total) //輸出最後狀態職
        }}
      >
        2:{total}
      </h1>
    </>
  )
}

export default CounterFC
