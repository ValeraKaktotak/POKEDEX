import { type FC } from 'react'
import { useRequestPokemonsInfiniteQuery } from '../../utils/api/hooks/pokemons'
import Pokemon from './Pokemon/Pokemon'
import styles from './PokemonsPage.module.css'

export const PokemonsPage: FC = () => {
  const { data, fetchNextPage, fetchPreviousPage, isLoading } =
    useRequestPokemonsInfiniteQuery()

  console.log('@@@IsLOADING', isLoading)

  if (!data) {
    return <h1>LOADING</h1>
  }

  return (
    <>
      <div className={styles.pokemons_container}>
        {data.pages.map((elem) =>
          elem.results.map((pokemon, index) => (
            <Pokemon
              key={index}
              pokemonInfo={{
                id: Number(pokemon.url.split('/').splice(-2, 1).join('')),
                name: pokemon.name
              }}
            />
          ))
        )}
      </div>
      <button
        onClick={() => {
          fetchNextPage()
        }}
      >
        ADD +10
      </button>
      <button
        onClick={() => {
          fetchPreviousPage()
        }}
      >
        BACK -10
      </button>
    </>
  )
}
