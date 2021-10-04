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
  const { id, name, category, image, price, count, handleDelete, setCount } =
    props

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
                setCount(count - 1)
              }}
            >
              -
            </a>
            <a href="#/" className="border">
              {count}
            </a>
            <a
              href="#/"
              onClick={() => {
                setCount(count + 1)
              }}
            >
              +
            </a>
          </div>
          <div className="col text-end">$ {price * count} 元</div>

          <div className="col text-end d-flex justify-content-end">
            <div
              className="cancel px-1"
              onClick={() => {
                handleDelete(id)
              }}
            >
              &#10005;
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductItem
