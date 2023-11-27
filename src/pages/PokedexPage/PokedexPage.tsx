import classNames from 'classnames'
import { useState, type FC } from 'react'

import { useRequestPokemonEvolution } from '../../utils/api/hooks/evolution-chain/id'
import type { IPokemonPage } from '../../utils/api/hooks/pokemon/types'
import { useRequestPokemonsQuery } from '../../utils/api/hooks/pokemons'

import styles from './PokedexPage.module.css'

export const PokedexPage: FC = () => {
  const results = useRequestPokemonsQuery(6)
  const isLoading = results.some((elem) => elem.isLoading)
  const pokemons = results.map((elem) => elem.data as IPokemonPage)
  const [selectedPokemonId, setSelectedPokemonId] = useState<number>(
    pokemons[0]?.id ?? 1
  )
  const { data } = useRequestPokemonEvolution({
    id: selectedPokemonId,
    isLoaded: !isLoading
  })

  if (isLoading) {
    return <div>LOADING</div>
  }
  // console.log(data)

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
          <div className={styles.pokemon_card_types}>
            {selectedPokemon?.types.map((elem) => (
              <div className={styles.pokemon_card_type} key={elem.type.name}>
                {elem.type.name}
              </div>
            ))}
          </div>
          <div className={styles.pokemon_card_title_image}>
            <img
              src={selectedPokemon?.sprites.front_default ?? ''}
              alt='pokemon_image'
            />
          </div>
          <div className={styles.pokemon_card_info}>
            <div>
              <div className={styles.pokemon_card_info_title}>Stats</div>
              <ul>
                {selectedPokemon?.stats.map((elem) => (
                  <li
                    className={styles.pokemon_card_info_stat}
                    key={elem.stat.name}
                  >
                    {elem.stat.name}: {elem.base_stat}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className={styles.pokemon_card_info_title}>Abilities</div>
              <ul>
                {selectedPokemon?.abilities.map((elem, index) => (
                  <li className={styles.pokemon_card_info_stat} key={index}>
                    {elem.ability.name}
                  </li>
                ))}
              </ul>
            </div>
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
