import { useState, type FC } from 'react'

import classNames from 'classnames'
import type { IPokemonPage } from '../../utils/api/hooks/pokemon/types'
import { useRequestPokemonsQuery } from '../../utils/api/hooks/pokemons'
import styles from './PokedexPage.module.css'

const PokedexPage: FC = () => {
  const results = useRequestPokemonsQuery(6)
  const [selectedPokemonId, setSelectedPokemonId] = useState<number>(1)
  const isLoading = results.some((elem) => elem.isLoading)
  const pokemons = results.map((elem) => elem.data as IPokemonPage)

  if (isLoading) {
    return <div>LOADING</div>
  }

  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <div className={styles.card}>
          <div>title</div>
          <div>img</div>
          <div>stats</div>
        </div>
        <ul className={styles.list}>
          {pokemons.map((elem) => {
            const isActive = selectedPokemonId === elem.id
            return (
              <li
                key={elem.id}
                role='option'
                aria-selected={isActive}
                tabIndex={0}
                className={classNames(styles.pokemon_item, {
                  [styles.active_pokemon_item]: isActive
                })}
                onKeyUp={(event) => {
                  if (event.key === 'Enter') setSelectedPokemonId(elem.id)
                }}
                onClick={() => {
                  setSelectedPokemonId(elem.id)
                }}
              >
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
