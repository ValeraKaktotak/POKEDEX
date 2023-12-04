import { useEffect, type FC } from 'react'
import { useInView } from 'react-intersection-observer'
import { Pokemon } from '.'
import { useRequestPokemonsInfiniteQuery } from '../../utils/api/hooks/pokemons'
import styles from './PokemonsPage.module.css'

export const PokemonsPage: FC = () => {
  const { ref, inView } = useInView()
  const { data, fetchNextPage } = useRequestPokemonsInfiniteQuery()

  useEffect(() => {
    if (inView) {
      fetchNextPage()
    }
  }, [inView])

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
      <div ref={ref} />
    </>
  )
}
