import type { FC } from 'react'
import { useRequestPokemonsQuery } from '../../utils/api/hooks/pokemons'

export const PokemonsPage: FC = () => {
  const { data, isLoading } = useRequestPokemonsQuery(0)
  console.log('@@@', useRequestPokemonsQuery(0))

  if (isLoading) {
    return <h1>LOADING</h1>
  }
  return <div>{data?.count}</div>
}
