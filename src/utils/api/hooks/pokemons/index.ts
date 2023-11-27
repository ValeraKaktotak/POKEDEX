import type { QueriesResults } from 'react-query'
import { useQueries } from 'react-query'

import { requestPokemon } from '../../requests/pokemon/id'
import type { IPokemonPage } from '../pokemon/types'

export const useRequestPokemonsQuery = (
  offset: number
): QueriesResults<IPokemonPage[]> =>
  useQueries<IPokemonPage[]>(
    Array.from({ length: offset }).map((_el, index) => ({
      queryKey: ['pokemon', index + 1],
      queryFn: async () => await requestPokemon({ params: { id: index + 1 } })
    }))
  )
