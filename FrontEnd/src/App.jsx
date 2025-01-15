import { useState } from 'react'
import{createBrowserRouter, RouterProvider } from "react-router-dom"
import ROUTES from './router/router'
import './App.css'

function App() {
  const router = createBrowserRouter(ROUTES)

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
