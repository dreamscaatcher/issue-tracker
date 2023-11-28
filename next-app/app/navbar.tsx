import React from 'react'
import Link from 'next/link'

const NavBar = () => {
  return (
    <div className = 'flex-center text-xl  bg-orange-600 p-5  text-end'>
        <Link href="/" className='mr-5 '>Next.js</Link>
        <Link href='/users'className='mr-5'>Users</Link>
        <Link href='/admin' className='mr-5'>Admin</Link>
        <Link href='/products'>Products</Link>
    </div>
  )
}

export default NavBar
