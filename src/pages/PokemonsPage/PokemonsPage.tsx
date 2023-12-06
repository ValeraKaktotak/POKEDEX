import { type FC,useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'

import { useRequestPokemonsInfiniteQuery } from '../../utils/api/hooks/pokemons'

import { Pokemon } from '.'

import styles from './PokemonsPage.module.css'

export const PokemonsPage: FC = () => {
  const { ref, inView } = useInView()
  const { data, fetchNextPage, hasNextPage } = useRequestPokemonsInfiniteQuery()

  useEffect(() => {
    if (inView && hasNextPage) {
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
            <Link
              to={`/pokemon/${Number(
                pokemon.url.split('/').splice(-2, 1).join('')
              )}`}
              key={index}
            >
              <Pokemon
                pokemonInfo={{
                  id: Number(pokemon.url.split('/').splice(-2, 1).join('')),
                  name: pokemon.name
                }}
              />
            </Link>
          ))
        )}
      </div>
      <div ref={ref} />
    </>
  )
}
