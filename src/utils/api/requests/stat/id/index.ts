import type { AxiosRequestConfig } from 'axios'

import { pokemonAPI } from '../../../instance'
import type { IStat } from './types'

interface IParams {
  id: number
}

interface RequestPokemonStatParam {
  config?: AxiosRequestConfig
  params: IParams
}

export const requestPokemonStat = async ({
  config,
  params
}: RequestPokemonStatParam): Promise<IStat> => {
  const response = await pokemonAPI.get<IStat>(`stat/${params.id}`, {
    ...config
  })
  return response.data
}
