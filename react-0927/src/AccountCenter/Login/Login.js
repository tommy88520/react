import React from 'react'
import { withRouter } from 'react-router-dom'
import classnames from 'classnames'
import styles from './Login.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import Google from './../../images/Google__G__Logo.svg'

function Login(props) {
  return (
    <>
      <div
        className={classnames(
          'container-fluid',
          styles.Tommy_bg_under,
          'd-flex',
          'justify-content-center',
          'align-items-center'
        )}
      >
        <div className={classnames('bg-white', styles.signUp)}>
          <div className={classnames('h-100', 'p-3', styles.Tommy_inner_bg)}>
            <div className={classnames('d-flex', 'justify-content-between')}>
              <p>歡迎回來</p>
              <FontAwesomeIcon className={styles.close} icon={faTimes} />
            </div>
            <h1>登入</h1>
            <form>
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
              <button
                type="submit"
                className={classnames(
                  styles.submit,
                  'btn',
                  'btn-primary',
                  'w-100',
                  'mt-5'
                )}
              >
                登入
              </button>
              <button
                type=""
                className={classnames(styles.google_submit, 'btn', 'w-100')}
              >
                <div className="d-flex justify-content-center">
                  <img src={Google} alt="" />
                  <span className="mx-5">使用 Google 帳號登入</span>
                </div>
              </button>
            </form>
            <p className={classnames('text-center', styles.Tommy_to_login)}>
              還沒有帳戶？點<span className={styles.here}>這裡</span>註冊
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default withRouter(Login)
