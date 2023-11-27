import { createBrowserRouter } from 'react-router-dom'

import PokedexPage from '../pages/PokedexPage/PokedexPage'
import { PokemonsPage } from '../pages/PokemonsPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <PokemonsPage />
  },
  {
    path: '/pokedex',
    element: <PokedexPage />
  }
])
