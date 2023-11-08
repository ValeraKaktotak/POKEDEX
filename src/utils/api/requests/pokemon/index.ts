import type { AxiosRequestConfig } from 'axios'
import { pokemonAPI } from '../../instance'

interface RequestPokemonsParam {
  config?: AxiosRequestConfig
}

export const requestPokemons = ({ config }: RequestPokemonsParam): any => {
  return pokemonAPI.get('pokemon', config).then((res) => res.data)
}
