import React from 'react'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Portfolio from './Components/Portfolio'
import { BrowserRouter as Router, Route, Routes, createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout'
import ErrorPage from './Components/ErrorPage'

const routers = createBrowserRouter([
  {path: '/', element: <Layout />, children: [
    {index:true , element: <Home /> },
    {path: '/Contact', element: <Contact /> },
    {path: '/Portfolio', element: <Portfolio /> },
    {path: '*', element: <ErrorPage /> },
  ]}
])


export default function App() {
  return <>
    <RouterProvider router={routers} >
      <Layout />
    </RouterProvider>
  </>
}
