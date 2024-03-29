import { type FC,useState } from 'react'

import { getPokemonId } from '../../../utils/helpers/getPokemonId'
import { PokemonInfo } from '..'

import styles from './Pokemon.module.css'

interface IPokemonProps {
  pokemonInfo: {
    name: string
    id: number
  }
}

export const Pokemon: FC<IPokemonProps> = ({ pokemonInfo }) => {
  const [pokemonId, setPokemonId] = useState<number | null>(null)

  if (!pokemonInfo) {
    return <div>Loading...</div>
  }
  return (
    <div
      className={styles.pokemon_container}
      role='button'
      tabIndex={0}
      onKeyPress={(event) => {
        if (event.key === 'Enter') {
          setPokemonId(pokemonInfo.id)
        }
      }}
      onClick={(e) => {
        setPokemonId(pokemonInfo.id)
        e.stopPropagation()
      }}
    >
      <div className={styles.pokemon_name}>{pokemonInfo.name}</div>
      <div className={styles.pokemon_number}>
        {getPokemonId(pokemonInfo.id)}
      </div>
      {pokemonInfo.id === pokemonId && (
        <PokemonInfo
          id={pokemonInfo.id}
          onClose={() => {
            setPokemonId(null)
          }}
        />
      )}
    </div>
  )
}
