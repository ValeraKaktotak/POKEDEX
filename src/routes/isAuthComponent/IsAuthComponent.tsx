import { useState, type FC } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

interface IIsAuthComponent {
  isAuth?: boolean
}

export const IsAuthComponent: FC<IIsAuthComponent> = ({
  isAuth = false,
  ...props
}) => {
  const [auth, setAuth] = useState(isAuth)

  if (!auth) {
    return <Navigate to='/Auth' />
  }
  return <Outlet {...props} />
}
