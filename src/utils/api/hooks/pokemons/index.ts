import type { QueriesResults } from 'react-query'
import { useQueries } from 'react-query'

import { requestPokemon } from '../../requests/pokemon/id'
import type { IPokemon } from '../../requests/pokemon/id/types'

export const useRequestPokemonsQuery = (
  offset: number
): QueriesResults<IPokemon[]> =>
  useQueries<IPokemon[]>(
    Array.from({ length: offset }).map((_el, index) => ({
      queryKey: ['pokemon', index + 1],
      queryFn: async () => await requestPokemon({ params: { id: index + 1 } })
    }))
  )
