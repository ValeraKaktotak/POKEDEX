import classNames from 'classnames'
import type { FC } from 'react'

import type { IPokemonTypes } from './types'

import styles from './PokemonTypes.module.css'

interface IPokemonTypesProps {
  types: IPokemonTypes[]
}

export const PokemonTypes: FC<IPokemonTypesProps> = ({ types }) => {
  return (
    <div className={styles.pokemon_types}>
      {types.map((elem) => (
        <div
          className={classNames(styles.pokemon_type, styles[elem.type.name])}
          key={elem.type.name}
        >
          {elem.type.name}
        </div>
      ))}
    </div>
  )
}
