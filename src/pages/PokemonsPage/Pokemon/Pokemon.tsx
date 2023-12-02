import type { FC } from 'react'
import { getPokemonId } from '../../../utils/helpers/getPokemonId'
import styles from './Pokemon.module.css'

interface IPokemonProps {
  pokemonInfo: {
    name: string
    id: number
  }
}

const Pokemon: FC<IPokemonProps> = ({ pokemonInfo }) => {
  if (!pokemonInfo) {
    // Обработка случая, когда данные еще не загружены
    return <div>Loading...</div>
  }
  return (
    <div className={styles.pokemon}>
      <div className={styles.pokemon_name}>{pokemonInfo.name}</div>
      <div className={styles.pokemon_number}>
        {getPokemonId(pokemonInfo.id)}
      </div>
    </div>
  )
}

export default Pokemon
