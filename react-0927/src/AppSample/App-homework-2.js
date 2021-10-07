import { useState } from 'react'
import './App.css'

function App() {
  const [isActive, setIsActive] = useState('首頁')

  return (
    <>
      <ul>
        <li>
          <a
            className={isActive === '首頁' && 'active'}
            onClick={() => setIsActive('首頁')}
          >
            首頁
          </a>
        </li>
        <li>
          <a
            className={isActive === '關於我們' && 'active'}
            onClick={() => setIsActive('關於我們')}
          >
            關於我們
          </a>
        </li>
        <li>
          <a
            className={isActive === '產品' && 'active'}
            onClick={() => setIsActive('產品')}
          >
            產品
          </a>
        </li>
      </ul>
    </>
  )
}

export default App
