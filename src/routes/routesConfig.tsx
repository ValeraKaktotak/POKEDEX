import { createBrowserRouter } from 'react-router-dom'

import { Layout } from '../features/layout'
import { PokedexPage } from '../pages/PokedexPage'
import { PokemonPage } from '../pages/PokemonPage'
import { PokemonsPage } from '../pages/PokemonsPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <PokemonsPage />
      },
      {
        path: '/pokedex',
        element: <PokedexPage />
      },
      {
        path: '/pokemon/:pokemonId',
        element: <PokemonPage />
      }
    ]
  }
])
