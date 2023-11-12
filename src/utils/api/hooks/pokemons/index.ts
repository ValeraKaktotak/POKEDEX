import type { UseInfiniteQueryResult } from 'react-query'
import { useInfiniteQuery } from 'react-query'

import { requestPokemons } from '../../requests/pokemon'

import type { IrequestPokemons } from './types'

export const useRequestPokemonsQuery = (
  limit: number
): UseInfiniteQueryResult<IrequestPokemons> =>
  useInfiniteQuery<IrequestPokemons>(
    ['pokemons'],
    ({ pageParam = 0 }) =>
      requestPokemons({ params: { limit, offset: pageParam } }),
    {
      refetchOnWindowFocus: false,
      keepPreviousData: true,
      getNextPageParam: (lastPage, pages) => {
        return pages.length * 5
      }
    }
  )
