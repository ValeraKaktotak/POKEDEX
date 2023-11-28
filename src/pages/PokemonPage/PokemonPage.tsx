import type { FC } from 'react'
import { useParams } from 'react-router-dom'

export const PokemonPage: FC = () => {
  const params = useParams()
  console.log(params)

  return <div>PokemonPage</div>
}
