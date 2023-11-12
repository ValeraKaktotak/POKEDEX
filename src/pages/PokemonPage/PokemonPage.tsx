import type { FC } from 'react'
import { useRequestPokemonQuery } from '../../utils/api/hooks/pokemon'

interface IPokemonPage {
  id: number
}

const PokemonPage: FC<IPokemonPage> = ({ id }) => {
  const { data } = useRequestPokemonQuery(id)
  console.log(data)

  return <div>{data?.name}</div>
}

export default PokemonPage
