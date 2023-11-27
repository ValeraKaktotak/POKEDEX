import type { UseQueryResult } from 'react-query'
import { useQuery } from 'react-query'

import { requestPokemonStat } from '../../../requests/stat/id'
import type { IStat } from '../../../requests/stat/id/types'

export const useRequestPokemonStat = (id: number): UseQueryResult<IStat> =>
  useQuery<IStat>(
    ['pokemonStat', id],
    async () => {
      const result = await requestPokemonStat({ params: { id } })
      return result
    },
    {
      refetchOnWindowFocus: false,
      keepPreviousData: true
    }
  )
