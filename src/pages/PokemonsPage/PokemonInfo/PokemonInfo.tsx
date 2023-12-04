import type { FC } from 'react'
import { useRequestPokemonQuery } from '../../../utils/api/hooks/pokemon'
import { getPokemonId } from '../../../utils/helpers/getPokemonId'
import styles from './PokemonInfo.module.css'

interface IPokemonInfo {
  id: number
}

export const PokemonInfo: FC<IPokemonInfo> = ({ id }) => {
  const { data, isLoading } = useRequestPokemonQuery(id)
  const pokemonNumber = getPokemonId(id)
  if (isLoading || !data) {
    return null
  }
  console.log(data)

  return (
    <div className={styles.pokemon_card}>
      <div className={styles.pokemon_card_title}>
        <div className={styles.pokemon_card_title_name}>{data.name}</div>
        <div className={styles.pokemon_card_title_id}>{pokemonNumber}</div>
      </div>
      <div className={styles.pokemon_card_types}>
        {data.types.map((elem) => (
          <div className={styles.pokemon_card_type} key={elem.type.name}>
            {elem.type.name}
          </div>
        ))}
      </div>
      <div className={styles.pokemon_card_title_image}>
        <img src={data.sprites.front_default ?? ''} alt='pokemon_image' />
      </div>
      <div className={styles.pokemon_card_info}>
        <div>
          <div className={styles.pokemon_card_info_title}>Stats</div>
          <ul>
            {data.stats.map((elem) => (
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
            {data.abilities.map((elem, index) => (
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
