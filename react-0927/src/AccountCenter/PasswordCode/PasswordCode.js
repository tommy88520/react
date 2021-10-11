import React from 'react'
import { withRouter } from 'react-router-dom'
import classnames from 'classnames'
import styles from './PasswordCode.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

function PasswordCode(props) {
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
        <div className={classnames('bg-white', styles.login)}>
          <div className={classnames('h-100', 'p-3', styles.Tommy_inner_bg)}>
            <div className={classnames('d-flex', 'justify-content-between')}>
              <h1>找回密碼</h1>
              <FontAwesomeIcon className={styles.close} icon={faTimes} />
            </div>
            <form className={classnames('mt-3')}>
              <div className="form-group">
                <label for="email">請輸入寄至信箱的驗證碼</label>
                <input
                  type="email"
                  className={classnames('form-control', styles.input_size)}
                  id="email"
                  name="email"
                  placeholder="驗證碼"
                />
                <small id="form-text" className="form-text"></small>
              </div>

              <small id="form-text" className="form-text"></small>
              <button
                type="submit"
                className={classnames(
                  styles.submit,
                  'btn',
                  'btn-primary',
                  'w-100',
                  'mt-4'
                )}
              >
                提交
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default withRouter(PasswordCode)
