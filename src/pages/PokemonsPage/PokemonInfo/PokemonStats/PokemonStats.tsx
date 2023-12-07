import type { FC } from 'react'
import styles from './PokemonStats.module.css'
import type { IPokemonAbility, IPokemonStats } from './types'

interface IPokemonStatsProps {
  stats: IPokemonStats[]
  abilities: IPokemonAbility[]
}

export const PokemonStats: FC<IPokemonStatsProps> = ({ stats, abilities }) => {
  return (
    <div className={styles.pokemon_stats}>
      <div>
        <div className={styles.pokemon_stats_title}>Stats</div>
        <ul>
          {stats.map((elem) => (
            <li className={styles.pokemon_stats_stat} key={elem.stat.name}>
              {elem.stat.name}: {elem.base_stat}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <div className={styles.pokemon_stats_title}>Abilities</div>
        <ul>
          {abilities.map((elem, index) => (
            <li className={styles.pokemon_stats_stat} key={index}>
              {elem.ability.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
