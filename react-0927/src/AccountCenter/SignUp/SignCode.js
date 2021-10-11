import React from 'react'
import { withRouter } from 'react-router-dom'
import classnames from 'classnames'
import styles from './SignCode.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

function SignCode(props) {
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
              <h1>請填如寄至信箱的驗證碼</h1>
              <FontAwesomeIcon className={styles.close} icon={faTimes} />
            </div>
            <form className={classnames('mt-3')}>
              <p>再發送一次</p>
              <div className="form-group">
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

export default withRouter(SignCode)
