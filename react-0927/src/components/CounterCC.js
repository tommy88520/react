import React from 'react'

class CounterCC extends React.Component {
  constructor() {
    super()
    //定義狀態的初始值
    const RandomNumber = Math.floor(Math.random() * 1000)
    this.state = {
      total: RandomNumber,
    }
  }
  render() {
    return (
      <>
        <h1
          onClick={() => {
            this.setState({
              total: this.state.total + 1,
            })
          }}
        >
          {this.state.total}
        </h1>
      </>
    )
  }
}

export default CounterCC
