import Link from 'next/link'
import React from 'react'
import UserRouter from './UserRouter';

const Sidebar = () => {
  return (
    <>
      <Link href="/admin/dashboard">Admin Dashboard</Link>
      <Link href="/user/profile/22">User22 profile</Link>
      <UserRouter />
    </>
  )
}

export default Sidebar;