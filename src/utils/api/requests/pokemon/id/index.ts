import type { AxiosRequestConfig } from 'axios'

import { pokemonAPI } from '../../../instance'

interface IParams {
  id: number
}

interface RequestPokemonParam {
  config?: AxiosRequestConfig
  params: IParams
}

export const requestPokemon = ({
  config,
  params
}: RequestPokemonParam): any => {
  return pokemonAPI
    .get(`pokemon/${params.id}`, { ...config })
    .then((res) => res.data)
}
