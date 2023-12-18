import type { UseQueryResult } from 'react-query'
import { useQuery } from 'react-query'

import { requestPokemonSpecies } from '../../../requests/pokemon-species/id'
import type { IPokemonSpecies } from '../../../requests/pokemon-species/id/types'

interface useRequestPokemonSpeciesParams {
  id: number
  isLoaded?: boolean
}

export const useRequestPokemonSpecies = (
  param: useRequestPokemonSpeciesParams
): UseQueryResult<IPokemonSpecies> => {
  return useQuery<IPokemonSpecies>(
    ['pokemonSpecies', param.id],
    async () => {
      const result = await requestPokemonSpecies({ params: { id: param.id } })
      return result
    },
    {
      enabled: param.isLoaded,
      refetchOnWindowFocus: false,
      keepPreviousData: true
    }
  )
}
