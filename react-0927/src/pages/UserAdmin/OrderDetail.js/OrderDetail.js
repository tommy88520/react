import React from 'react'
import { Link, withRouter } from 'react-router-dom'

// 子頁面區域元件
import UserOrder from './UserOrder'
import UserProfile from './UserProfile'
import UserAvatar from './UserAvatar'
import UserPassword from './UserPassword'
import UserFavorite from './UserFavorite'

function OrderDetail(props) {
  console.log(props)

  // 網址參數對應頁面區塊元件
  // 屬性 = 網址上的task參數 props.match.params.task
  const tasks = {
    order: UserOrder,
    profile: UserProfile,
    avatar: UserAvatar,
    password: UserPassword,
    favorite: UserFavorite,
  }

  // 自訂元件需要大寫
  // 動態元件jsx標記的語法
  // 預設出現的文字元件
  // () => <>會員管理區域</>
  const Component = props.match.params.task
    ? tasks[props.match.params.task]
    : () => <>會員管理區域2</>

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-9">
            <h1>會員管理區</h1>
            <Component />
          </div>
        </div>
      </div>
    </>
  )
}

export default withRouter(OrderDetail)
