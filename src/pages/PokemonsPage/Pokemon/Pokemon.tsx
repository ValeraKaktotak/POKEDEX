import { useState, type FC } from 'react'
import { getPokemonId } from '../../../utils/helpers/getPokemonId'
import styles from './Pokemon.module.css'

interface IPokemonProps {
  pokemonInfo: {
    name: string
    id: number
  }
}

const Pokemon: FC<IPokemonProps> = ({ pokemonInfo }) => {
  const [pokemonId, setPokemonId] = useState<string | number | null>(null)
  console.log(pokemonId)

  if (!pokemonInfo) {
    // Обработка случая, когда данные еще не загружены
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
      {pokemonInfo.id === pokemonId && (
        <div className={styles.pokemon_info}>123</div>
      )}
    </div>
  )
}

export default Pokemon
