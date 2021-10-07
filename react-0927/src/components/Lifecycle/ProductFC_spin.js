import React, { useEffect, useState } from 'react'
import { css } from '@emotion/react'
import PuffLoader from 'react-spinners/PuffLoader'

// 產品訂購的項目
const productsFromServer = [
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
]
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`

function ProductFC(props) {
  // [{
  //   id: 1,
  //   name: '咖啡色 T-shirt',
  //   category: 'Shirt',
  //   image: 'https://i.imgur.com/1GrakTl.jpg',
  //   price: 300,
  // }]
  const [products, setProducts] = useState([])
  // 為了要切換載入動畫提示
  const [isLoading, setIsLoading] = useState(true)

  let [loading, setLoading] = useState(true)
  let [color, setColor] = useState('#ffffff')

  // didMount
  // 第二個傳入參數為空陣列時，只執行第一次(讀取到時)
  useEffect(() => {
    // 模擬商品從伺服器來(fetch/ajax)
    setTimeout(() => {
      setProducts(productsFromServer)
    }, 1000)

    // 把載入動畫提示關起來
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, [])

  const spinner = (
    <div className="spinner-border text-primary" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  )

  const display = (
    <ul>
      {products.map((v, i) => {
        return <li key={i}>{v.name}</li>
      })}
    </ul>
  )

  return (
    <>
      <h1>商品資料</h1>
      {/* 用載入指示的旗標來切換呈現 */}
      {isLoading ? (
        <PuffLoader color={color} loading={loading} css={override} size={150} />
      ) : (
        display
      )}
    </>
  )
}

export default ProductFC
