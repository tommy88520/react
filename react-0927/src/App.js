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
  {
    id: 2,
    name: '白色 T-shirt',
    category: 'Shirt',
    image: 'https://i.imgur.com/ba3tvGm.jpg',
    price: 200,
  },
  {
    id: 3,
    name: '黑色 T-shirt',
    category: 'Shirt',
    image: 'https://i.imgur.com/pHQ3xT3.jpg',
    price: 450,
  },
  {
    id: 4,
    name: '金色 T-shirt',
    category: 'Shirt',
    image: 'https://i.imgur.com/pHQ3xT3.jpg',
    price: 100,
  },
]

// 初始化狀態用的函式 - 用陣列狀態
// const initState = (products) => {
//   const state = []

//   for (let i = 0; i < products.length; i++) {
//     state.push(1)
//   }

//   return state
// }

// 初始化狀態用的函式 - 用陣列中的物件狀態
const initStateWithObjcet = (products) => {
  const state = []

  for (let i = 0; i < products.length; i++) {
    state.push({ ...products[i], count: 1 })
  }

  return state
}

function App() {
  // 多樣產品狀態：陣列
  // ex. 三樣商品 -> [1,1,1]
  // 下面兩種方式均可
  //const [counts, setCounts] = useState(initState(products))
  //const [counts, setCounts] = useState(Array(products.length).fill(1))

  // 多樣產品狀態：物件
  // [{
  //   id: 4,
  //   name: '金色 T-shirt',
  //   category: 'Shirt',
  //   image: 'https://i.imgur.com/pHQ3xT3.jpg',
  //   price: 100,
  //   count:1
  // }]
  const [productsInOrder, setProductsInOrder] = useState(
    initStateWithObjcet(products)
  )

  // Summary
  // 計算目前所有的商品數量
  const productCount = () => {
    let totalCount = 0

    for (let i = 0; i < productsInOrder.length; i++) {
      totalCount += productsInOrder[i].count
    }

    return totalCount
  }

  // 計算目前所有的商品總價
  const total = () => {
    let sum = 0

    for (let i = 0; i < productsInOrder.length; i++) {
      sum += productsInOrder[i].count * productsInOrder[i].price
    }

    return sum
  }

  return (
    <div className="card">
      <div className="row">
        <OrderList
          productCount={productCount()}
          productsInOrder={productsInOrder}
          setProductsInOrder={setProductsInOrder}
        />
        <Summary productCount={productCount()} total={total()} />
      </div>
    </div>
  )
}

export default App
