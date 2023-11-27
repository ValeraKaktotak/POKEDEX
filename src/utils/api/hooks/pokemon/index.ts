import type { UseQueryResult } from 'react-query'
import { useQuery } from 'react-query'

import { requestPokemon } from '../../requests/pokemon/id'

import type { IPokemonPage } from './types'

export const useRequestPokemonQuery = (
  id: number
): UseQueryResult<IPokemonPage> =>
  useQuery<IPokemonPage>(
    ['pokemon', id],
    async () => await requestPokemon({ params: { id } }),
    {
      refetchOnWindowFocus: false,
      keepPreviousData: true
    }
  )
