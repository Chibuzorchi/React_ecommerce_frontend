import React from 'react'
import { useLocation } from 'react-router-dom'
import Head from './Head'
import Navbar from './Navbar'
import Search from './Search'


const Header = ({cartItem}) => {
  let pathname = useLocation().pathname
  return (
    <>
      <Head />
      {pathname !== '/login' && <Search cartItem={cartItem} />}
      <Navbar />
    </>
  )
}

export default Header
