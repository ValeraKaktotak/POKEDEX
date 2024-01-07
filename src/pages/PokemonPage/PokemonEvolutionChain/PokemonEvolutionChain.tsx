import type { FC } from 'react'
import { useRequestPokemonEvolution } from '../../../utils/api/hooks/evolution-chain/id'
import styles from './PokemonEvolutionChain.module.css'

interface IPokemonEvolutionChain {
  id: number
}

export const PokemonEvolutionChain: FC<IPokemonEvolutionChain> = ({
  id: chainId
}) => {
  const { data: pokemonEvolutionData, isLoading: pokemonEvolutionLoading } =
    useRequestPokemonEvolution({
      id: chainId,
      isLoaded: Boolean(chainId)
    })
  console.log(pokemonEvolutionData)

  return <div className={styles.container}>PokemonEvolutionChain</div>
}
