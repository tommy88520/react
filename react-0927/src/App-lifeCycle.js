import React, { useState } from 'react'
import LifecycleCC from './components/Lifecycle/LifecycleCC'
import LifecycleFC from './components/Lifecycle/LifecycleFC'


function App() {
  const [isLive, setIsLive] = useState(true)

  return (
    <>
      {isLive && <LifecycleCC />}
      <button onClick={() => setIsLive(!isLive)}>切換</button>
      <hr />
      {isLive && <LifecycleFC />}
      <button onClick={() => setIsLive(!isLive)}>切換</button>
    </>
  )
}

export default App
