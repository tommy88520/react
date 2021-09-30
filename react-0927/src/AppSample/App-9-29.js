import CounterFC from './components/CounterFC'
import CounterCC from './components/CounterCC'
import FormFC from './components/FormFC'
import FormCC from './components/FormCC'
// import Parent from './components/Parent'
import Counter from './components/Counter'
import Parent from './components/Third_child/Parent'

function App() {
  return (
    <>
      <h2>函式型元件</h2>
      <CounterFC />
      <hr />
      <h2>類別型元件</h2>
      <CounterCC />
      <hr />
      <FormFC />
      <hr />
      <FormCC />
      <hr />
      {/* <Parent /> */}
      <hr />
      <h2>購物車加減</h2>
      <Counter />
      <Parent />
    </>
  )
}

export default App
