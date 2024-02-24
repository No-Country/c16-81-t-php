import React from 'react'

const UsersSelectOption = ({user}) => {
  return (
    <option value={user.id}>
          {user.nick_name}
    </option>
  )
}

export default UsersSelectOption