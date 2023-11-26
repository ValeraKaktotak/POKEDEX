import type { AxiosRequestConfig } from 'axios'

import { pokemonAPI } from '../../../instance'
import type { IEvolution } from './types'

interface IParams {
  id: number
}

interface RequestPokemonEvolutionParams {
  config?: AxiosRequestConfig
  params: IParams
}

export const requestPokemonEvolution = async ({
  config,
  params
}: RequestPokemonEvolutionParams): Promise<IEvolution> => {
  const response = await pokemonAPI.get<IEvolution>(
    `evolution-chain/${params.id}`,
    {
      ...config
    }
  )
  return response.data
}
