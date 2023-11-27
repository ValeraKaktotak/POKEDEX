import type { AxiosRequestConfig } from 'axios'

import { pokemonAPI } from '../../../instance'

import type { IPokemon } from './types'

interface IParams {
  id: number
}

interface RequestPokemonParam {
  config?: AxiosRequestConfig
  params: IParams
}

export const requestPokemon = async ({
  config,
  params
}: RequestPokemonParam): Promise<IPokemon> => {
  const response = await pokemonAPI.get<IPokemon>(`pokemon/${params.id}`, {
    ...config
  })
  return response.data
}
