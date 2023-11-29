import { type FC } from 'react'
import { useQueryClient } from 'react-query'
import { useParams } from 'react-router-dom'

import { useRequestPokemonQuery } from '../../utils/api/hooks/pokemon'

export const PokemonPage: FC = () => {
  const params = useParams<{ pokemonId: string }>()
  const queryClient = useQueryClient()

  console.log('@queryClient', queryClient.getQueryData(['pokemon', 2]))
  const { data } = useRequestPokemonQuery(Number(params.pokemonId))

  return <div className='capitalize font-bold'>{data?.name}</div>
}
