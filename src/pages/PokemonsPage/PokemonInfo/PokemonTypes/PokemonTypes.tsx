import type { FC } from 'react'
import styles from './PokemonTypes.module.css'
import type { IPokemonTypes } from './types'

interface IPokemonTypesProps {
  types: IPokemonTypes[]
}

export const PokemonTypes: FC<IPokemonTypesProps> = ({ types }) => {
  return (
    <div className={styles.pokemon_types}>
      {types.map((elem) => (
        <div className={styles.pokemon_type} key={elem.type.name}>
          {elem.type.name}
        </div>
      ))}
    </div>
  )
}
