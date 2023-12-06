import { type FC } from 'react'
import { useParams } from 'react-router-dom'

import { useRequestPokemonQuery } from '../../utils/api/hooks/pokemon'

export const PokemonPage: FC = () => {
  const params = useParams<{ pokemonId: string }>()
  const { data } = useRequestPokemonQuery(Number(params.pokemonId))

  return <div className='capitalize font-bold'>{data?.name}</div>
}
