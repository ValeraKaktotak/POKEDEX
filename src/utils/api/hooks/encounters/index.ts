import type { UseQueryResult } from 'react-query'
import { useQuery } from 'react-query'

import { requestPokemonEncounter } from '../../requests/pokemon/id/encounters'
import type { IPokemonEncounter } from '../../requests/pokemon/id/encounters/types'

export const useRequestPokemonEncountersQuery = (
  id: number
): UseQueryResult<IPokemonEncounter> =>
  useQuery<IPokemonEncounter>(
    ['pokemon', id],
    async () => await requestPokemonEncounter({ params: { id } }),
    {
      refetchOnWindowFocus: false,
      keepPreviousData: true
    }
  )
