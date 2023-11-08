import { createBrowserRouter } from 'react-router-dom'
import { PokemonsPage } from '../pages/PokemonsPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <PokemonsPage />
  }
])
