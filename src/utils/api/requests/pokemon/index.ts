import type { AxiosRequestConfig } from 'axios'

import { pokemonAPI } from '../../instance'

interface IParams {
  limit: number
  offset: number
}

interface RequestPokemonsParam {
  config?: AxiosRequestConfig
  params: IParams
}

export const requestPokemons = ({
  config,
  params
}: RequestPokemonsParam): any => {
  return pokemonAPI
    .get('pokemon', { ...config, params })
    .then((res) => res.data)
}
