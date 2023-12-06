import type { UseQueryResult } from 'react-query'
import { useQuery } from 'react-query'

import { requestPokemon } from '../../requests/pokemon/id'
import type { IPokemon } from '../../requests/pokemon/id/types'

export const useRequestPokemonQuery = (id: number): UseQueryResult<IPokemon> =>
  useQuery<IPokemon>(
    ['pokemon', id],
    async () => await requestPokemon({ params: { id } }),
    {
      refetchOnWindowFocus: false,
      keepPreviousData: true
    }
  )
