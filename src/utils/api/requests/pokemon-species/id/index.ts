import type { AxiosRequestConfig } from 'axios'

import { pokemonAPI } from '../../../instance'

import type { IPokemonSpecies } from './types'

interface IParams {
  id: number
}

interface RequestPokemonSpeciesParams {
  config?: AxiosRequestConfig
  params: IParams
}

export const requestPokemonSpecies = async ({
  config,
  params
}: RequestPokemonSpeciesParams): Promise<IPokemonSpecies> => {
  const response = await pokemonAPI.get<IPokemonSpecies>(
    `pokemon-species/${params.id}`,
    {
      ...config
    }
  )
  return response.data
}
