import { createBrowserRouter } from 'react-router-dom'

import { Layout } from '../features/layout'
import { AuthPage } from '../pages/AuthPage'
import { PokedexPage } from '../pages/PokedexPage'
import { PokemonPage } from '../pages/PokemonPage'
import { PokemonsPage } from '../pages/PokemonsPage'
import { ProfilePage } from '../pages/ProfilePage'
import { IsAuthComponent } from './isAuthComponent/IsAuthComponent'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <PokemonsPage />
      },
      {
        path: '/auth',
        element: <AuthPage />
      },
      {
        path: '/pokedex',
        element: <IsAuthComponent />,
        children: [
          {
            path: '',
            element: <PokedexPage />
          }
        ]
      },
      {
        path: '/profile',
        element: <IsAuthComponent />,
        children: [
          {
            path: '',
            element: <ProfilePage />
          }
        ]
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
