import type { UseQueryResult } from 'react-query'
import { useQuery } from 'react-query'

import { requestPokemons } from '../../requests/pokemon'

import type { IrequestPokemons } from './types'

export const useRequestPokemonsQuery = (
  offset: number
): UseQueryResult<IrequestPokemons> =>
  useQuery<IrequestPokemons>(
    ['pokemon', offset],
    () => requestPokemons({ params: { limit: 10, offset } }),
    { refetchOnWindowFocus: false, keepPreviousData: true }
  )
