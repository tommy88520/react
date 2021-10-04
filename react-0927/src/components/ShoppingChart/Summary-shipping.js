import React from 'react'
import { useState } from 'react'

function SummaryShipping(props) {
  const { productCount, total } = props
  const [selectedOption, setSelectedOption] = useState('')

  return (
    <>
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
              <option value="200">郵局</option>
              <option value="250">快遞</option>
            </select>
          </section>
        </div>
      </div>
    </>
  )
}

export default SummaryShipping
