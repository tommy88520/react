import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

function UserAvatar(props) {
  return (
    <>
      <h2>MeetUp</h2>
      <i class="fas fa-copy"></i>
      {/* <FontAwesomeIcon icon={faCoffee} /> */}
      <FontAwesomeIcon icon={faTimes} />

      {/* <i class="fas fa-times"></i> */}
    </>
  )
}

export default UserAvatar
