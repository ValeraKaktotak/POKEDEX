import type { AxiosRequestConfig } from 'axios'

import { pokemonAPI } from '../../../../instance'

import type { IPokemonEncounter } from './types'

interface IParams {
  id: number
}

interface RequestPokemonParam {
  config?: AxiosRequestConfig
  params: IParams
}

export const requestPokemonEncounter = async ({
  config,
  params
}: RequestPokemonParam): Promise<IPokemonEncounter> => {
  const response = await pokemonAPI.get<IPokemonEncounter>(
    `pokemon/${params.id}/encounters`,
    {
      ...config
    }
  )
  return response.data
}
