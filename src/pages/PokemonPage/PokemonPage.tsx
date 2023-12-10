import { type FC } from 'react'
import { useParams } from 'react-router-dom'
import styles from './PokemonPage.module.css'

import { useRequestPokemonEvolution } from '../../utils/api/hooks/evolution-chain/id'
import { useRequestPokemonQuery } from '../../utils/api/hooks/pokemon'
import { getPokemonId } from '../../utils/helpers/getPokemonId'
import { PokemonStats } from '../PokemonsPage/PokemonInfo/PokemonStats/PokemonStats'

export const PokemonPage: FC = () => {
  const params = useParams<{ pokemonId: string }>()
  const { data: pokemonData, isLoading: pokemonLoading } =
    useRequestPokemonQuery(Number(params.pokemonId))

  const { data: pokemonEvolutionData, isLoading: pokemonEvolutionDataLoading } =
    useRequestPokemonEvolution({
      id: Number(params.pokemonId),
      isLoaded: !pokemonLoading
    })

  const isData = pokemonData && pokemonEvolutionData
  const isLoading = pokemonLoading && pokemonEvolutionDataLoading

  if (isLoading || !isData) return <div>LOADING...</div>

  return (
    <div className={styles.page}>
      <div className={styles.name_container}>
        <div>{pokemonData.name}</div>
        <div className={styles.page_container_number}>
          {getPokemonId(pokemonData.id)}
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.image}>
          <img
            src={pokemonData.sprites.front_default ?? ''}
            alt='pokemon_image'
          />
        </div>
        <PokemonStats
          stats={pokemonData.stats}
          abilities={pokemonData.abilities}
        />
      </div>
    </div>
  )
}
