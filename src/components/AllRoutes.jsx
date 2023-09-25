import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import Counter from '../pages/Counter'
import Timer from "../pages/Timer"
import About from '../pages/About'
import TodoApp from '../pages/TodoApp'


export default function AllRoutes() {
  return (
    <div>
     <Routes>
            <Route exact path="/" element={HomePage} />
            <Route path="/timer" element={Timer} />
            <Route path="/counter" element={Counter} />
            <Route path="/todoApp" element={TodoApp} />
            <Route path="/about" element={About} />
            
      </Routes>
    </div>
  )
}
