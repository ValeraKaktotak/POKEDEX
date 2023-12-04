import type { FC } from 'react'
import { useRequestPokemonQuery } from '../../../utils/api/hooks/pokemon'
import { getPokemonId } from '../../../utils/helpers/getPokemonId'
import styles from './PokemonInfo.module.css'

interface IPokemonInfo {
  id: number
}

export const PokemonInfo: FC<IPokemonInfo> = ({ id }) => {
  const { data: pokemon, isLoading } = useRequestPokemonQuery(id)
  const pokemonNumber = getPokemonId(id)
  if (isLoading || !pokemon) {
    return null
  }
  console.log(pokemon)

  return (
    <div className={styles.pokemon_card}>
      <div className={styles.pokemon_card_title}>
        <div className={styles.pokemon_card_title_name}>{pokemon.name}</div>
        <div className={styles.pokemon_card_title_id}>{pokemonNumber}</div>
      </div>
      <div className={styles.pokemon_card_types}>
        {pokemon.types.map((elem) => (
          <div className={styles.pokemon_card_type} key={elem.type.name}>
            {elem.type.name}
          </div>
        ))}
      </div>
      <div className={styles.pokemon_card_title_image}>
        <img src={pokemon.sprites.front_default ?? ''} alt='pokemon_image' />
      </div>
      <div className={styles.pokemon_card_info}>
        <div>
          <div className={styles.pokemon_card_info_title}>Stats</div>
          <ul>
            {pokemon.stats.map((elem) => (
              <li
                className={styles.pokemon_card_info_stat}
                key={elem.stat.name}
              >
                {elem.stat.name}: {elem.base_stat}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className={styles.pokemon_card_info_title}>Abilities</div>
          <ul>
            {pokemon.abilities.map((elem, index) => (
              <li className={styles.pokemon_card_info_stat} key={index}>
                {elem.ability.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
