import { useContext, useState, type FC } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { StoreContext } from '../../utils/context/store'

export const IsAuthComponent: FC = () => {
  const isAuth = useContext(StoreContext)
  const [auth, setAuth] = useState(isAuth.store.session.isLogin)

  if (!auth) {
    return <Navigate to='/Auth' />
  }
  return <Outlet />
}
