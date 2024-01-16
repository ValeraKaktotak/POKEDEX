import type { FC } from 'react'
import type { QueriesResults } from 'react-query'
import { useRequestEvolutionChainPokemonQueries } from '../../../../utils/api/hooks/evolution-chain/pokemons'
import type { IPokemon } from '../../../../utils/api/requests/pokemon/id/types'

interface IPokemonEvolutionChainItem {
  chain: Array<{ name: string; url: string }>
}

export const PokemonEvolutionChainItem: FC<IPokemonEvolutionChainItem> = ({
  chain
}) => {
  const chainIds = chain.map((item) =>
    Number(item.url.split('/').splice(-2, 1).join(''))
  )
  const res: QueriesResults<IPokemon[]> =
    useRequestEvolutionChainPokemonQueries(chainIds)
  console.log(res)

  if (res.find((item) => !item.isSuccess)) return <div>LOADING...</div>

  return (
    <div>
      {res.map((item, index) => (
        <div key={index}>{item.data.name}</div>
      ))}
    </div>
  )
}
