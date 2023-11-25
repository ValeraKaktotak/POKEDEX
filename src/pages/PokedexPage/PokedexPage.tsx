import { useState, type FC } from 'react'

import classNames from 'classnames'
import type { IPokemonPage } from '../../utils/api/hooks/pokemon/types'
import { useRequestPokemonsQuery } from '../../utils/api/hooks/pokemons'
import styles from './PokedexPage.module.css'

const PokedexPage: FC = () => {
  const results = useRequestPokemonsQuery(6)
  const isLoading = results.some((elem) => elem.isLoading)
  const pokemons = results.map((elem) => elem.data as IPokemonPage)
  const [selectedPokemonId, setSelectedPokemonId] = useState<number>(
    pokemons[0]?.id ?? 1
  )

  if (isLoading) {
    return <div>LOADING</div>
  }

  const selectedPokemon = pokemons.find(
    (pokemon) => selectedPokemonId === pokemon.id
  )

  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <div className={styles.pokemon_card}>
          <div className={styles.pokemon_card_title}>
            <div className={styles.pokemon_card_title_name}>
              {selectedPokemon?.name}
            </div>
            <div className={styles.pokemon_card_title_id}>
              #00{selectedPokemon?.id}
            </div>
          </div>
          <div className={styles.pokemon_card_title_image}>
            <img
              src={selectedPokemon?.sprites.front_default ?? ''}
              alt='pokemon_image'
            />
          </div>
          <div>
            {selectedPokemon?.stats.map((elem) => (
              <div key={elem.stat.name}>
                {elem.stat.name}:{elem.base_stat}
              </div>
            ))}
          </div>
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
                  [styles.pokemon_item_active]: isActive
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
