import type { AxiosRequestConfig } from 'axios'

import { pokemonAPI } from '../../../instance'
import type { IPokemonForm } from './types'

interface IParams {
  id: number
}

interface RequestPokemonFormParam {
  config?: AxiosRequestConfig
  params: IParams
}

export const requestPokemonForm = async ({
  config,
  params
}: RequestPokemonFormParam): Promise<IPokemonForm> => {
  const response = await pokemonAPI.get<IPokemonForm>(
    `pokemon-form/${params.id}`,
    {
      ...config
    }
  )
  return response.data
}
