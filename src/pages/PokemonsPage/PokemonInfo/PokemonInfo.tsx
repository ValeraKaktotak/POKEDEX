import type { FC } from 'react'

import { useRequestPokemonQuery } from '../../../utils/api/hooks/pokemon'

import styles from './PokemonInfo.module.css'

interface IPokemonInfo {
  id: number
}

export const PokemonInfo: FC<IPokemonInfo> = ({ id }) => {
  const { data: pokemon, isLoading } = useRequestPokemonQuery(id)
  if (isLoading || !pokemon) {
    return null
  }

  return (
    <div className={styles.pokemon_info_container}>
      <div className={styles.pokemon_info_title_image}>
        <img src={pokemon.sprites.front_default ?? ''} alt='pokemon_image' />
      </div>
      <div className={styles.pokemon_info_types}>
        {pokemon.types.map((elem) => (
          <div className={styles.pokemon_info_type} key={elem.type.name}>
            {elem.type.name}
          </div>
        ))}
      </div>
      <div className={styles.pokemon_info_stats}>
        <div>
          <div className={styles.pokemon_info_title}>Stats</div>
          <ul>
            {pokemon.stats.map((elem) => (
              <li className={styles.pokemon_info_stat} key={elem.stat.name}>
                {elem.stat.name}: {elem.base_stat}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className={styles.pokemon_info_title}>Abilities</div>
          <ul>
            {pokemon.abilities.map((elem, index) => (
              <li className={styles.pokemon_info_stat} key={index}>
                {elem.ability.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
