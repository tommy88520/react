import React, { useState } from 'react'
import LifecycleCC from './components/Lifecycle/LifecycleCC'
import LifecycleFC from './components/Lifecycle/LifecycleFC'
import ProductCC from './components/Lifecycle/ProductCC'
import ProductFC from './components/Lifecycle/ProductFC'
import ProductFC_spin from './components/Lifecycle/ProductFC_spin'


function App() {
  const [isLive, setIsLive] = useState(true)

  return (
    <>
      {isLive && <LifecycleCC />}
      <button onClick={() => setIsLive(!isLive)}>切換</button>
      <hr />
      {isLive && <LifecycleFC />}
      <button onClick={() => setIsLive(!isLive)}>切換</button>
      <hr />
      {isLive && <ProductCC />}
      <button onClick={() => setIsLive(!isLive)}>切換</button>
      <hr />
      {isLive && <ProductFC />}
      <button onClick={() => setIsLive(!isLive)}>切換</button>
      <hr />
      {isLive && <ProductFC_spin />}
      <button onClick={() => setIsLive(!isLive)}>切換</button>


    </>
  )
}

export default App
