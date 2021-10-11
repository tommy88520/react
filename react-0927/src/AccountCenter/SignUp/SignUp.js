import React from 'react'
import { withRouter } from 'react-router-dom'
import classnames from 'classnames'
import styles from './SignUp.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import Google from './../../images/Google__G__Logo.svg'

function SignUp(props) {
  return (
    <>
      <div
        className={classnames(
          'container-fluid',
          styles.bg_under,
          'd-flex',
          'justify-content-center',
          'align-items-center'
        )}
      >
        <div className={classnames('bg-white', styles.signUp)}>
          <div className={classnames('h-100', 'p-3', styles.Tommy_inner_bg)}>
            <div className={classnames('d-flex', 'justify-content-between')}>
              <p>歡迎</p>
              <FontAwesomeIcon className={styles.close} icon={faTimes} />
            </div>
            <h1>註冊</h1>
            <form>
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
              <div className="form-group">
                <label for="password_confirm">再次輸入密碼</label>
                <input
                  type="password"
                  className={classnames('form-control', styles.input_size)}
                  id="password_confirm"
                  placeholder="Password_confirm"
                  name="password_confirm"
                />
              </div>
              <small id="form-text" className="form-text"></small>
              <div className="form-group form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" for="exampleCheck1">
                  Check me out
                </label>
              </div>
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
                註冊
              </button>
              <button
                type=""
                className={classnames(styles.google_submit, 'btn', 'w-100')}
              >
                <div className="d-flex justify-content-center">
                  <img src={Google} alt="" />
                  <span className={classnames('mx-5')}>
                    使用 Google 帳戶註冊
                  </span>
                </div>
              </button>
            </form>
            <p className={classnames('text-center', styles.Tommy_to_login)}>
              已經有帳戶？點<span className={styles.here}>這裡</span>登入
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default withRouter(SignUp)
