import React from 'react'
import Header from '../../Pages/Header'
import Footer from '../../Pages/Footer'
import { Outlet } from 'react-router-dom'

const Root = () => {
  return (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
   
  )
}

export default Root