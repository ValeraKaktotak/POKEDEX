import type { UseQueryResult } from 'react-query'
import { useQuery } from 'react-query'

import { requestPokemonEncounter } from '../../requests/pokemon/id/encounters'
import type { IPokemonEncounter } from '../../requests/pokemon/id/encounters/types'

interface useRequestPokemonEncountersQueryParams {
  id: number
  isLoaded?: boolean
}

export const useRequestPokemonEncountersQuery = ({
  ...param
}: useRequestPokemonEncountersQueryParams): UseQueryResult<IPokemonEncounter> =>
  useQuery<IPokemonEncounter>(
    ['pokemonEncounter', param.id],
    async () => await requestPokemonEncounter({ params: { id: param.id } }),
    {
      enabled: param.isLoaded,
      refetchOnWindowFocus: false,
      keepPreviousData: true
    }
  )
