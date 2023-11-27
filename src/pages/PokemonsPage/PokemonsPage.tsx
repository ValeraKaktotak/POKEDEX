import { type FC,useState } from 'react'

import type { IPokemonPage } from '../../utils/api/hooks/pokemon/types'
import { useRequestPokemonsQuery } from '../../utils/api/hooks/pokemons'

import Pokemon from './Pokemon/Pokemon'

export const PokemonsPage: FC = () => {
  // pokemons limit for each request
  const [offset, setOffset] = useState<number>(10)
  const results = useRequestPokemonsQuery(offset)
  console.log(results)

  if (results.some((elem) => elem.isLoading)) {
    return <h1>LOADING</h1>
  }
  return (
    <>
      <div className='grid grid-cols-3 gap-10 p-5 '>
        {results?.map((pokemon, index) => (
          <Pokemon key={index} pokemonInfo={pokemon.data as IPokemonPage} />
        ))}
      </div>
      <button
        onClick={() => {
          setOffset((prev) => prev + 10)
        }}
      >
        ADD +10
      </button>
    </>
  )
}
