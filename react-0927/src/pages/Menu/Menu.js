import React from 'react'
import { Link } from 'react-router-dom'
import './Menu.scss'

function Menu(props) {
  const { cartCount } = props
  return (
    <>
      <ul className="menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        {/* <li>
          <Link to="/about">About</Link>
        </li> */}
        <li>
          <Link to="/product">Product</Link>
        </li>
        <li>
          <Link to="/user">User</Link>
        </li>
        <li>
          <Link to="/admin/user">User Admin</Link>
        </li>

        <li>
          <Link to="/cart">Cart</Link>
        </li>
        <li>
          <Link to="/sign-up">sign up</Link>
        </li>
        <li>
          <Link to="/log-in">Login</Link>
        </li>
        <li>
          <Link to="/find-password">FindPassword</Link>
        </li>
        <li>
          <Link to="/password-code">FindPassword-code</Link>
        </li>
        <li>
          <Link to="/sign-code">sign-code</Link>
        </li>
        <li>
          <button type="button" className="btn btn-primary">
            購物數量 <span className="badge badge-light">{cartCount}</span>
            <span className="sr-only"></span>
          </button>
        </li>
      </ul>
    </>
  )
}

export default Menu
