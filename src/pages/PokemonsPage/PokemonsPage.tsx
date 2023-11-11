import { type FC } from 'react'

import { useRequestPokemonsQuery } from '../../utils/api/hooks/pokemons'

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
            <div key={pokemon.name}>{pokemon.name}</div>
          ))
        })}
      </div>
      <button
        onClick={() => {
          fetchNextPage()
        }}
      >
        next 10
      </button>
    </>
  )
}
