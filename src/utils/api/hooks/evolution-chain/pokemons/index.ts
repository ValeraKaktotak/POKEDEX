import type { QueriesResults } from 'react-query'
import { useQueries } from 'react-query'

import { requestPokemon } from '../../../requests/pokemon/id'
import type { IPokemon } from '../../../requests/pokemon/id/types'

export const useRequestEvolutionChainPokemonQueries = (
  arrayId: number[]
): QueriesResults<IPokemon[]> =>
  useQueries<IPokemon[]>(
    arrayId.map((item: number) => ({
      queryKey: ['chainPokemon', item],
      queryFn: async () => await requestPokemon({ params: { id: item } })
    }))
  )
