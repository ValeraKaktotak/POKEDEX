import type { UseQueryResult } from 'react-query'
import { useQuery } from 'react-query'

import { requestPokemonForm } from '../../../requests/pokemon-form/id'
import type { IPokemonForm } from '../../../requests/pokemon-form/id/types'

export const useRequestPokemonStat = (
  id: number
): UseQueryResult<IPokemonForm> =>
  useQuery<IPokemonForm>(
    ['pokemonForm', id],
    async () => {
      const result = await requestPokemonForm({ params: { id } })
      return result
    },
    {
      refetchOnWindowFocus: false,
      keepPreviousData: true
    }
  )
