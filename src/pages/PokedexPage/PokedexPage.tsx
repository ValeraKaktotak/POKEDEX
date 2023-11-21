import type { FC } from 'react'

import type { IPokemonPage } from '../../utils/api/hooks/pokemon/types'
import { useRequestPokemonsQuery } from '../../utils/api/hooks/pokemons'
import styles from './PokedexPage.module.css'

const PokedexPage: FC = () => {
  const results = useRequestPokemonsQuery(9)
  const isLoading = results.some((elem) => elem.isLoading)
  const pokemons = results.map((elem) => elem.data as IPokemonPage)

  if (isLoading) {
    return <div>LOADING</div>
  }

  return (
    <div className={styles.page_container}>
      <div className={styles.content_container}>
        <div>card</div>
        <ul className={styles.list_container}>
          {pokemons.map((elem) => {
            return (
              <li key={elem.id} className={styles.pokemon_item}>
                <img
                  className={styles.pokemon_item_image}
                  src={elem.sprites.front_default ?? ''}
                  alt='pokemon_img'
                />
                <span>{elem.name}</span>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default PokedexPage
