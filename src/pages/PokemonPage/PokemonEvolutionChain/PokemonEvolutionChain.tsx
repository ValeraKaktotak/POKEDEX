import type { FC } from 'react'

import { useRequestPokemonEvolution } from '../../../utils/api/hooks/evolution-chain/id'
import type { Chain } from '../../../utils/api/requests/evolution-chain/id/types'

import { PokemonEvolutionChainItem } from './PokemonEvolutionChainItem'

import styles from './PokemonEvolutionChain.module.css'

interface IPokemonEvolutionChain {
  chainId: number
  pokemonId: number
}

const generateEvolutionChain = (
  pokemonChain: Chain,
  chain: Array<{ name: string; url: string }> = []
): Array<{ name: string; url: string }> => {
  chain = [
    ...chain,
    { name: pokemonChain.species.name, url: pokemonChain.species.url }
  ]
  if (!pokemonChain.evolves_to.length) {
    return chain
  }
  return generateEvolutionChain(pokemonChain.evolves_to[0], chain)
}

export const PokemonEvolutionChain: FC<IPokemonEvolutionChain> = ({
  chainId,
  pokemonId
}) => {
  const { data: pokemonEvolutionData, isLoading: pokemonEvolutionLoading } =
    useRequestPokemonEvolution({
      id: chainId,
      isLoaded: Boolean(chainId)
    })

  const isPokemonEvolutionData =
    pokemonEvolutionData && !pokemonEvolutionLoading

  if (!isPokemonEvolutionData) return <div>LOADING...</div>

  const chainData: Chain = pokemonEvolutionData.chain
  const chainArray = generateEvolutionChain(chainData)

  return (
    <>
      <div className='title text-left'>Evolution Chain</div>
      <div className={styles.evolution_container}>
        {chainArray.map((item) => (
          <PokemonEvolutionChainItem
            key={item.name}
            info={item}
            isActive={pokemonId === +item.url.split('/').splice(-2, 1).join('')}
          />
        ))}
      </div>
    </>
  )
}
