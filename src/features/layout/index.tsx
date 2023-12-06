import type { FC } from 'react'
import { Outlet } from 'react-router-dom'

import { Header } from './Header/Header'

export const Layout: FC = () => {
  return (
    <div>
      <Header />
      <div className='pt-[90px]'>
        <Outlet />
      </div>
    </div>
  )
}
