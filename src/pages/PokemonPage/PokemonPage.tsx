import axios from 'axios'
import type { FC } from 'react'
import { useQuery } from 'react-query'
import type { IPokemonPage } from './types'

export const PokemonPage: FC = () => {
  const { data, isLoading } = useQuery<IPokemonPage>(
    'pokemon',
    async () =>
      await axios
        .get('https://pokeapi.co/api/v2/pokemon/ditto')
        .then((res: any) => res.data)
  )
  if (isLoading) {
    return <h1>LOADING</h1>
  }
  return <div>{data?.name}</div>
}
