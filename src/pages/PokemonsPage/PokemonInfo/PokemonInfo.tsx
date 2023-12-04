import type { FC } from 'react'
import { useRequestPokemonQuery } from '../../../utils/api/hooks/pokemon'

interface IPokemonInfo {
  id: number
}

export const PokemonInfo: FC<IPokemonInfo> = ({ id }) => {
  const { data, isLoading } = useRequestPokemonQuery(id)
  if (isLoading || !data) {
    return null
  }
  console.log(data)

  return <div>{id}</div>
}
