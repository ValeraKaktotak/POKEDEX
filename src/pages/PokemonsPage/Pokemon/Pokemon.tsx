import { useState, type FC } from 'react'

import { PokemonInfo } from '..'
import { getPokemonId } from '../../../utils/helpers/getPokemonId'

import styles from './Pokemon.module.css'

interface IPokemonProps {
  pokemonInfo: {
    name: string
    id: number
  }
}

export const Pokemon: FC<IPokemonProps> = ({ pokemonInfo }) => {
  const [pokemonId, setPokemonId] = useState<number | null>(null)
  // const debouncedValue = useDebounce({ value: pokemonId })
  console.log(pokemonId)

  if (!pokemonInfo) {
    return <div>Loading...</div>
  }
  return (
    <div
      className={styles.pokemon_container}
      onClick={() => {
        setPokemonId(pokemonInfo.id)
      }}
    >
      <div className={styles.pokemon_name}>{pokemonInfo.name}</div>
      <div className={styles.pokemon_number}>
        {getPokemonId(pokemonInfo.id)}
      </div>
      {pokemonInfo.id === pokemonId && <PokemonInfo id={pokemonInfo.id} />}
    </div>
  )
}
