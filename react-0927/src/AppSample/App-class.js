import { useState } from 'react'
import MyButton from '../components/MyButton'
import './App.css'
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
          // alert('hi')
        }}
      >
        -
      </button>
      <input type="text" placeholder="heheehehehehheh" />
      <div className="card card-width">
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#/" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </>
  )
}

// export default App
