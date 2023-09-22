import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import Blogs from '../pages/Blogs'
import Projects from '../pages/Projects'
import About from '../pages/About'
import Contact from '../pages/Contact'


export default function AllRoutes() {
  return (
    <div>
     <Routes>
            <Route exact path="/" element={HomePage} />
            <Route path="/blogs" element={Blogs} />
            <Route path="/projects" element={Projects} />
            <Route path="/about" element={About} />
            <Route path="/contact" element={Contact} />
      </Routes>
    </div>
  )
}
