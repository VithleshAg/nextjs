"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const UserRouter = () => {
    const router = useRouter();

  return (
    <div>
      Routing 22th user by function:
      <button onClick={() => router.push("/user/profile/22")}>22th user profile</button>
    </div>
  )
}

export default UserRouter
