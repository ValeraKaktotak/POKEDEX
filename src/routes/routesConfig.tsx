import { createBrowserRouter } from 'react-router-dom'

import { Layout } from '../features/layout'
import { Auth } from '../pages/Auth'
import { PokedexPage } from '../pages/PokedexPage'
import { PokemonPage } from '../pages/PokemonPage'
import { PokemonsPage } from '../pages/PokemonsPage'

export const router = createBrowserRouter([
  {
    path: '/auth',
    element: <Auth />
  },
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <PokemonsPage />
      },
      {
        path: '/pokedex',
        element: <PokedexPage />
      },
      {
        path: '/pokemon/:pokemonId',
        element: <PokemonPage />
      },
      {
        path: '*',
        element: <div>Not Found</div>
      }
    ]
  }
])
