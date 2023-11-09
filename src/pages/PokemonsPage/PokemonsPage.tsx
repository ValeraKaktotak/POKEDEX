import { type FC } from 'react'

import { useRequestPokemonsQuery } from '../../utils/api/hooks/pokemons'

export const PokemonsPage: FC = () => {
  // limit of pokemons for one request
  const { data, isLoading, fetchNextPage } = useRequestPokemonsQuery(5)

  if (isLoading) {
    return <h1>LOADING</h1>
  }
  return (
    <>
      <div>
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
