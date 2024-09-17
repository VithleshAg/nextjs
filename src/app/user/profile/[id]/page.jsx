import React from 'react'

const UserProfile = ({params}) => {
    // console.log({params});
  return (
    <div>
      user id : {params.id}
    </div>
  )
}

export default UserProfile
