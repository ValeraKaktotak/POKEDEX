import type { UseQueryResult } from 'react-query'
import { useQuery } from 'react-query'

import { requestPokemonEvolution } from '../../../requests/pokemon-form/id'
import type { IEvolution } from '../../../requests/pokemon-form/id/types'

export const useRequestPokemonEvolution = (
  id: number
): UseQueryResult<IEvolution> =>
  useQuery<IEvolution>(
    ['pokemonEvolution', id],
    async () => {
      const result = await requestPokemonEvolution({ params: { id } })
      return result
    },
    {
      refetchOnWindowFocus: false,
      keepPreviousData: true
    }
  )
