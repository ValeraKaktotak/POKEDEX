import type { AxiosRequestConfig } from 'axios'

import { pokemonAPI } from '../../instance'

import type { IPokemons } from './types'

interface IParams {
  limit: number
  offset: number
}

interface RequestPokemonsParam {
  config?: AxiosRequestConfig
  params: IParams
}

export const requestPokemons = async ({
  config,
  params
}: RequestPokemonsParam): Promise<IPokemons> => {
  const response = await pokemonAPI.get('pokemon', { ...config, params })
  return response.data
}
