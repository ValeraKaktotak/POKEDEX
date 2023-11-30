import { type FC } from 'react'
import { useRequestPokemonsInfiniteQuery } from '../../utils/api/hooks/pokemons'
import Pokemon from './Pokemon/Pokemon'

interface Pokemons {
  name: string
  url: string
}

export const PokemonsPage: FC = () => {
  const { data, fetchNextPage } = useRequestPokemonsInfiniteQuery()

  if (!data) {
    return <h1>LOADING</h1>
  }

  return (
    <>
      {/* вариант с useQueries
      =========================
      <div className='grid grid-cols-3 gap-10 p-5 '>
        {results?.map((pokemon, index) => (
          <Pokemon key={index} pokemonInfo={pokemon.data as IPokemon} />
        ))}
      </div>
      <button
        onClick={() => {
          setOffset((prev) => prev + 10)
        }}
      >
        ADD +10
      </button> */}

      <div className='grid grid-cols-3 gap-10 p-5 '>
        {data.pages.map((elem) =>
          elem.results.map((pokemon, index) => (
            <Pokemon
              key={index}
              pokemonInfo={Number(
                pokemon.url.split('/').splice(-2, 1).join('')
              )}
            />
          ))
        )}
      </div>
      <button>ADD +10</button>
    </>
  )
}
