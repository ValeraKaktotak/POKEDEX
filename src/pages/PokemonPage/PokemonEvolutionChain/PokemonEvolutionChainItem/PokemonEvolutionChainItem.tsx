import type { FC } from 'react'
import { useRequestPokemonQuery } from '../../../../utils/api/hooks/pokemon'
import styles from './PokemonEvolutionChainItem.module.css'

interface IPokemonEvolutionChainItem {
  info: { name: string; url: string }
}

export const PokemonEvolutionChainItem: FC<IPokemonEvolutionChainItem> = ({
  info
}) => {
  const id = +info.url.split('/').splice(-2, 1).join('')
  const { data, isLoading } = useRequestPokemonQuery(id)

  if (isLoading || !data) return <div>Loading...</div>
  console.log(data)

  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={data.sprites.front_default ?? ''} alt='pokemon_image' />
      </div>
      <div>{data?.name}</div>
    </div>
  )
}
