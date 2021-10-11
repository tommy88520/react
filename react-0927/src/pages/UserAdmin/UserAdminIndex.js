import React from 'react'
import { Link, withRouter } from 'react-router-dom'

// 子頁面區域元件
import UserProfile from './UserProfile'
import UserRecipient from './UserRecipient'
import UserOrder from './UserOrder'
import UserFavorite from './UserFavorite'
import UserMeetUp from './UserMeetUp'
import UserRank from './UserRank'

import styles from './UserAdminIndex.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Avatar from './../../images/IMG_0001.jpeg'
import classnames from 'classnames'
// import { faTimes } from '@fortawesome/free-solid-svg-icons'

function UserAdminIndex(props) {
  console.log(props)

  // 假設使用 http://localhost:3000/admin/user/order/?order_id=3
  const searchParams = new URLSearchParams(props.location.search)
  const order_id = searchParams.get('order_id')
  console.log(order_id)

  // 網址參數對應頁面區塊元件
  // 屬性 = 網址上的task參數 props.match.params.task
  const tasks = {
    profile: UserProfile,
    recipient: UserRecipient,
    order: UserOrder,
    favorite: UserFavorite,
    meetUp: UserMeetUp,
    rank: UserRank,
  }

  // 自訂元件需要大寫
  // 動態元件jsx標記的語法
  // 預設出現的文字元件
  // () => <>會員管理區域</>
  const Component = props.match.params.task
    ? tasks[props.match.params.task]
    : () => <>會員管理區域</>

  return (
    <>
      <div className="container">
        <div className="row">
          <div className={classnames(styles.slide_bar)}>
            <h1>我的帳戶</h1>
            <p>MY ACCOUNT</p>
            <div>
              <img
                className={classnames(styles.avatar, 'rounded-circle', 'my-4')}
                src={Avatar}
                alt=""
              />
            </div>
            <ul
              className={classnames(
                'd-flex flex-column justify-content-around',
                styles.slide_bar_ul
              )}
            >
              <li className={classnames(styles.slide_bar_li)}>我的帳戶</li>
              <li className={classnames(styles.slide_bar_li)}>
                <Link
                  className={classnames(styles.slide_bar_color)}
                  to="/admin/user/profile"
                >
                  個人資訊
                </Link>
              </li>
              <li className={classnames(styles.slide_bar_li)}>
                <Link
                  className={classnames(styles.slide_bar_color)}
                  to="/admin/user/recipient"
                >
                  收件資訊
                </Link>
              </li>
              <li className={classnames(styles.slide_bar_li)}>
                <Link
                  className={classnames(styles.slide_bar_color)}
                  to="/admin/user/order"
                >
                  歷史訂單
                </Link>
              </li>
              <li className={classnames(styles.slide_bar_li)}>
                <Link
                  className={classnames(styles.slide_bar_color)}
                  to="/admin/user/favorite"
                >
                  追蹤清單
                </Link>
              </li>
              <li className={classnames(styles.slide_bar_li)}>
                <Link
                  className={classnames(styles.slide_bar_color)}
                  to="/admin/user/meetUp"
                >
                  Meet Up 活動列表
                </Link>
              </li>
              <li className={classnames(styles.slide_bar_li)}>
                <Link
                  className={classnames(styles.slide_bar_color)}
                  to="/admin/user/rank"
                >
                  會員等級
                </Link>
              </li>
            </ul>
          </div>
          <div className="col d-flex justify-content-center">
            <Component />
          </div>
        </div>
      </div>
    </>
  )
}

export default withRouter(UserAdminIndex)
