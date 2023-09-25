import React from 'react'
import Navbar from '../components/HomeComps/Navbar'
import AllRoutes from '../components/AllRoutes'
import Footer from '../components/HomeComps/Footer'
import Middle from '../components/HomeComps/Middle'


export default function HomePage() {
  return (
    <div>
         <AllRoutes/>
         <Navbar/>
         <Middle/>
         <Footer/>
    </div>
  )
}
