import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import { router } from './Router/Router'
import TimelineContextProvider from './Context/TimelineContextProvider'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TimelineContextProvider>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer/>
    </TimelineContextProvider>
  </StrictMode>,
)
