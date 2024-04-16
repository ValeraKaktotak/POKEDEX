import { type FC,useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

import { StoreContext } from '../../utils/context/store'

export const IsAuthComponent: FC = () => {
  const { store } = useContext(StoreContext)
  const auth = store.session.isLogin

  if (!auth) {
    return <Navigate to='/Auth' />
  }
  return <Outlet />
}
