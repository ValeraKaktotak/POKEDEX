import React, { useContext } from 'react'
import { RouterProvider } from 'react-router-dom'

import { router } from './routes/routesConfig'

import './App.css'
import { StoreContext } from './utils/context/store'

const App: React.FC = () => {
  const { store } = useContext(StoreContext)
  if (!store.session.isLogin) return <h1>LOADING...</h1>
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
