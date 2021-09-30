import React, { useState } from 'react'
import './App.css'
import OrderList from './components/ShoppingChart/OrderList'
import Summary from './components/ShoppingChart/Summary'

// 產品訂購的項目
const products = [
  {
    id: 1,
    name: '咖啡色 T-shirt',
    category: 'Shirt',
    image: 'https://i.imgur.com/1GrakTl.jpg',
    price: 300,
  },
  // {
  //   id: 2,
  //   name: '白色 T-shirt',
  //   category: 'Shirt',
  //   image: 'https://i.imgur.com/ba3tvGm.jpg',
  //   price: 200,
  // },
  // {
  //   id: 3,
  //   name: '黑色 T-shirt',
  //   category: 'Shirt',
  //   image: 'https://i.imgur.com/pHQ3xT3.jpg',
  //   price: 450,
  // },
]

const initState = (products) => {
  const init = []
  for (let i; i < products.length; i++) {
    init.push(1)
  }
  return []
}

function App() {
  // 多樣產品是陣列
  const [Counts, setCounts] = useState(initState(products))

  return (
    <div className="card">
      <div className="row">
        <OrderList products={products} setCounts={setCounts} Counts={Counts} />
        <Summary productCount={Counts} total={Counts * products[0].price} />
      </div>
    </div>
  )
}

export default App
