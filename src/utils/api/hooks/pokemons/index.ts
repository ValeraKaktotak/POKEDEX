import type { QueriesResults, UseInfiniteQueryResult } from 'react-query'
import { useInfiniteQuery, useQueries } from 'react-query'

import { requestPokemons } from '../../requests/pokemon'
import { requestPokemon } from '../../requests/pokemon/id'
import type { IPokemon } from '../../requests/pokemon/id/types'
import type { IPokemons } from '../../requests/pokemon/types'

export const useRequestPokemonsQuery = (
  offset: number
): QueriesResults<IPokemon[]> =>
  useQueries<IPokemon[]>(
    Array.from({ length: offset }).map((_el, index) => ({
      queryKey: ['pokemons', index + 1],
      queryFn: async () => await requestPokemon({ params: { id: index + 1 } })
    }))
  )

export const useRequestPokemonsInfiniteQuery =
  (): UseInfiniteQueryResult<IPokemons> =>
    useInfiniteQuery<IPokemons>(
      'pokemonsPaginate',
      async ({ pageParam = 0 }) =>
        await requestPokemons({ params: { offset: pageParam, limit: 10 } }),
      {
        refetchOnWindowFocus: false,
        getNextPageParam: (lastPage, allPages) => {
          return allPages.length * 10
        },
        getPreviousPageParam: (firstPage, allPages) => {
          return allPages.length * 10 - 10
        }
      }
    )
