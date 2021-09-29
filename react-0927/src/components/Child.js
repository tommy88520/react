import React from 'react'
import PropTypes from 'prop-types'
function Child(props) {
  const { name, text } = props
  //先解構
  console.log(props)
  return (
    <>
      <h1>{name}</h1>
      <p>{text}</p>
    </>
  )
}

Child.defaultProps = {
  name: '陳小花',
  text: 'Hello',
}
Child.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}
export default Child
