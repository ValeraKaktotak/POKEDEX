import type { UseQueryResult } from 'react-query'
import { useQuery } from 'react-query'

import { requestPokemonEvolution } from '../../../requests/evolution-chain/id'
import type { IEvolution } from '../../../requests/evolution-chain/id/types'

interface useRequestPokemonEvolutionParams {
  id: number
  isLoaded?: boolean
}

export const useRequestPokemonEvolution = (
  param: useRequestPokemonEvolutionParams
): UseQueryResult<IEvolution> => {
  console.log(param.isLoaded)

  return useQuery<IEvolution>(
    ['pokemonEvolution', param.id],
    async () => {
      const result = await requestPokemonEvolution({ params: { id: param.id } })
      return result
    },
    {
      enabled: param.isLoaded,
      refetchOnWindowFocus: false,
      keepPreviousData: true
    }
  )
}
