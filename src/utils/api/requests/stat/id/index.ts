import type { AxiosRequestConfig } from 'axios'

import { pokemonAPI } from '../../../instance'
import type { IStat } from './types'

interface IParams {
  id: number
}

interface RequestPokemonsParam {
  config?: AxiosRequestConfig
  params: IParams
}

export const requestPokemonStat = async ({
  config,
  params
}: RequestPokemonsParam): Promise<IStat> => {
  const response = await pokemonAPI.get<IStat>('stat', { ...config, params })
  return response.data
}
