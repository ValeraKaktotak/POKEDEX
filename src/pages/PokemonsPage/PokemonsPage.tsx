import { type FC } from 'react'

import type { IPokemonPage } from '../../utils/api/hooks/pokemon/types'
import { useRequestPokemonsQuery } from '../../utils/api/hooks/pokemons'
import PokemonPage from '../PokemonPage/PokemonPage'

export const PokemonsPage: FC = () => {
  // pokemons limit for each request
  const results = useRequestPokemonsQuery(10)

  if (results.some((elem) => elem.isLoading)) {
    return <h1>LOADING</h1>
  }
  return (
    <>
      <div className='grid grid-cols-3 gap-3 p-5 '>
        {results?.map((pokemon, index) => (
          <PokemonPage key={index} pokemonInfo={pokemon.data as IPokemonPage} />
        ))}
      </div>
    </>
  )
}
