import type { FC } from 'react'
import { useRequestPokemonQuery } from '../../../../utils/api/hooks/pokemon'

interface IPokemonEvolutionChainItem {
  info: { name: string; url: string }
}

export const PokemonEvolutionChainItem: FC<IPokemonEvolutionChainItem> = ({
  info
}) => {
  const id = +info.url.split('/').splice(-2, 1).join('')
  const { data } = useRequestPokemonQuery(id)
  console.log(data)

  return <div>{data?.name}</div>
}
