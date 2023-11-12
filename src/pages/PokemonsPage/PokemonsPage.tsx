import { type FC } from 'react'

import { useRequestPokemonsQuery } from '../../utils/api/hooks/pokemons'
import PokemonPage from '../PokemonPage/PokemonPage'

export const PokemonsPage: FC = () => {
  // pokemons limit for each request
  const { data, isLoading, fetchNextPage } = useRequestPokemonsQuery(5)

  if (isLoading) {
    return <h1>LOADING</h1>
  }
  return (
    <>
      <div className='grid grid-cols-3 gap-3 p-5 '>
        {data?.pages.map((pokemonPage) => {
          return pokemonPage.results.map((pokemon) => (
            <PokemonPage
              key={pokemon.name}
              id={Number(pokemon.url.split('/').slice(-2, -1))}
            />
          ))
        })}
      </div>
      <button
        onClick={() => {
          fetchNextPage()
        }}
      >
        next 5
      </button>
    </>
  )
}
