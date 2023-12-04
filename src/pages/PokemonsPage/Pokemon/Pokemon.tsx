import { useState, type FC } from 'react'
import { PokemonInfo } from '..'
import { getPokemonId } from '../../../utils/helpers/getPokemonId'
import { useDebounce } from '../../../utils/helpers/useDebounce'
import styles from './Pokemon.module.css'

interface IPokemonProps {
  pokemonInfo: {
    name: string
    id: number
  }
}

export const Pokemon: FC<IPokemonProps> = ({ pokemonInfo }) => {
  const [pokemonId, setPokemonId] = useState<number | null>(null)
  const debouncedValue = useDebounce({ value: pokemonId })

  if (!pokemonInfo) {
    return <div>Loading...</div>
  }
  return (
    <div
      className={styles.pokemon_container}
      onMouseEnter={() => {
        setPokemonId(pokemonInfo.id)
      }}
      onMouseLeave={() => {
        setPokemonId(null)
      }}
    >
      <div className={styles.pokemon_name}>{pokemonInfo.name}</div>
      <div className={styles.pokemon_number}>
        {getPokemonId(pokemonInfo.id)}
      </div>
      {pokemonInfo.id === debouncedValue && (
        <div className={styles.pokemon_info}>
          <PokemonInfo id={pokemonInfo.id} />
        </div>
      )}
    </div>
  )
}
