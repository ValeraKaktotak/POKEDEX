import type { FC } from 'react'
import type { IPokemonPage } from '../../utils/api/hooks/pokemon/types'

interface IPokemonPageProps {
  pokemonInfo: IPokemonPage
}

const PokemonPage: FC<IPokemonPageProps> = ({ pokemonInfo }) => {
  return <div>{pokemonInfo.name}</div>
}

export default PokemonPage
