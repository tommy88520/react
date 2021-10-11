import React from 'react'
import classnames from 'classnames'
import styles from './UserProfile.module.scss'

function UserProfile(props) {
  return (
    <>
      <div>
        <form>
          <div
            className={classnames(
              styles.profile_top,
              'd-flex',
              'justify-content-between',
              'pb-4'
            )}
          >
            <h2>個人資料管理</h2>

            <button
              type="submit"
              className={classnames('btn', 'btn-dark', styles.modify_button)}
            >
              修改
            </button>
          </div>
          <div className={classnames('p-4')}>
            <div className="form-group">
              <label for="email">暱稱</label>
              <input
                type="nickname"
                className={classnames('form-control', styles.input_size)}
                id="nickname"
                name="nickname"
                placeholder="nickname"
              />
              <small id="form-text" className="form-text"></small>
            </div>
            <div className="form-group">
              <label for="email">Email address</label>
              <input
                type="email"
                className={classnames('form-control', styles.input_size)}
                id="email"
                name="email"
                placeholder="Enter email"
              />
              <small id="form-text" className="form-text"></small>
            </div>
            <div className="form-group">
              <label for="password">Password</label>
              <input
                type="password"
                className={classnames('form-control', styles.input_size)}
                id="password"
                placeholder="Password"
                name="password"
              />
            </div>
            <small id="form-text" className="form-text"></small>
          </div>
        </form>
      </div>
    </>
  )
}

export default UserProfile
