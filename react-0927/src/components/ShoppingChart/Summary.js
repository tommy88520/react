import React from 'react'
import { useState } from 'react'
import SummaryShipping from './Summary-shipping'

function Summary(props) {
  const { productCount, total } = props
  const [selectedOption, setSelectedOption] = useState('')
  const newTotal = () => {}

  return (
    <>
      <div className="col-md-4 summary">
        <div>
          <h5 className="text-end">
            <b>付款摘要</b>
          </h5>
        </div>
        <hr />
        <div className="row">
          <div className="col col-style">共 {productCount} 項目</div>
        </div>
        <div className="row">
          <div className="col col-style shipping">
            <div className="w-100">運送方式</div>
            <section>
              <select
                className="w-100"
                id="selectedOption"
                value={selectedOption}
                onChange={(e) => {
                  setSelectedOption(e.target.value)
                }}
              >
                {/* 第一個值會用state的初始值 */}
                <option value="">請選擇</option>
                <option value="200">郵局(運費200元)</option>
                <option value="250">快遞(運費250元)</option>
              </select>
            </section>
          </div>
        </div>
        <div className="row row-style">
          <div className="col">總價</div>
          <div className="col text-end">${total * 1 + selectedOption * 1}</div>
        </div>
        <button className="btn">前往付款</button>
      </div>
    </>
  )
}

export default Summary
