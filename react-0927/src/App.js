import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Product from './pages/Product/Product'
import ProductDetail from './pages/Product/ProductDetail'
import Android from './pages/Product/sub-product/Android'
import Apple from './pages/Product/sub-product/Apple'
import User from './pages/User/User'
import Cart from './pages/Cart/Cart'
import Menu from './pages/Menu/Menu'
import UserAdminIndex from './pages/UserAdmin/UserAdminIndex'
import BreadCrumb from './pages/BreadCrumb/BreadCrumb'
import SignUp from './AccountCenter/SignUp/SignUp'
import Login from './AccountCenter/Login/Login'
import FindPassword from './AccountCenter/FindPassword/FindPassword'
import PasswordCode from './AccountCenter/PasswordCode/PasswordCode'
import SignCode from './AccountCenter/SignUp/SignCode'

function App() {
  // 指示會員是否登入，true = 登入
  const [auth, setAuth] = useState(false)
  const [cartCount, setCartCount] = useState(0)

  // didMount
  useEffect(() => {
    // 問伺服器是否有會員登入
    // 如果有登入，設定auth為true
    setAuth(true)

    //請localstorage中的購物車數量
    const myCart = localStorage.getItem('cart')
      ? JSON.parse(localStorage.getItem('cart'))
      : []

    // 設定為陣列的長度(成員數量)
    setCartCount(myCart.length)
  }, [])

  return (
    <Router>
      <>
        <Menu cartCount={cartCount} />
        <BreadCrumb />
        <Switch>
          {/* 路徑愈長往愈上面放 */}
          <Route path="/product/apple">
            <Apple />
          </Route>
          <Route path="/product/android">
            <Android />
          </Route>
          <Route path="/product/product-detail/:id?">
            <ProductDetail />
          </Route>
          <Route path="/product">
            <Product cartCount={cartCount} setCartCount={setCartCount} />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          {/* ----我的---- */}
          <Route path="/sign-up">
            <SignUp />
          </Route>
          <Route path="/log-in">
            <Login />
          </Route>
          <Route path="/find-password">
            <FindPassword />
          </Route>
          <Route path="/password-code">
            <PasswordCode />
          </Route>
          <Route path="/sign-code">
            <SignCode />
          </Route>
          {/* ----我的---- */}
          <Route path="/about">
            <About />
          </Route>
          <Route path="/user">
            <User auth={auth} setAuth={setAuth} />
          </Route>
          <Route path="/admin/user/:task?">
            <UserAdminIndex />
          </Route>
          <Route exact path="/">
            <Home auth={auth} />
          </Route>
        </Switch>
      </>
    </Router>
  )
}

export default App
