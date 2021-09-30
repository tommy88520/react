import React from 'react'

// 每個商品的物件
// {
//     id: 1,
//     name: '咖啡色 T-shirt',
//     catgory: 'Shirt',
//     image: 'https://i.imgur.com/1GrakTl.jpg',
//     price: 300,
//  }

function ProductItem(props) {
  const { name, category, image, price, countOne, setCountOne } = props

  return (
    <>
      <div className="row border-top border-bottom">
        <div className="row main align-items-center">
          <div className="col-2">
            <img alt="" className="img-fluid" src={image} />
          </div>
          <div className="col">
            <div className="row text-muted">{category}</div>
            <div className="row">{name}</div>
          </div>
          <div className="col">
            <a
              href="#/"
              onClick={() => {
                //產品最少數量為1
                const newCount = countOne - 1 < 1 ? 1 : countOne - 1
                setCountOne(newCount)
              }}
            >
              -
            </a>
            <a href="#/" className="border">
              {countOne}
            </a>
            <a
              href="#/"
              onClick={() => {
                setCountOne(countOne + 1)
              }}
            >
              +
            </a>
          </div>
          <div className="col">
            ${countOne * price} <span className="close">&#10005;</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductItem
