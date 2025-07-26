import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
  return (
    <div className='flex flex-col gap-2 w-1/4 max-w-60 p-4 border-r'>
      <Link href="/">Home</Link>
      <Link href="/admin/dashboard">Admin Dashboard</Link>
      <Link href="/users/10">User 10 profile</Link>
      <Link href="/users">Users</Link>
      <Link href="/city">City</Link>
    </div>
  )
}

export default Sidebar;