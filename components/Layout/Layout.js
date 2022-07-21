import React from 'react'
import Footer from './Footer'
import Navbar from './NavBar.js'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Layout({children}) {
  return (
    <div>
        <Navbar />
        {children}
        <Footer />
    </div>
  )
}
