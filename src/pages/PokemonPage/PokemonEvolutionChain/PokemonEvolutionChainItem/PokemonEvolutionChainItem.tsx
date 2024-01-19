import classNames from 'classnames'
import type { FC } from 'react'
import { Link } from 'react-router-dom'

import { useRequestPokemonQuery } from '../../../../utils/api/hooks/pokemon'

import styles from './PokemonEvolutionChainItem.module.css'

interface IPokemonEvolutionChainItem {
  info: { name: string; url: string }
  isActive: boolean
}

export const PokemonEvolutionChainItem: FC<IPokemonEvolutionChainItem> = ({
  info,
  isActive
}) => {
  const id = +info.url.split('/').splice(-2, 1).join('')
  const { data, isLoading } = useRequestPokemonQuery(id)

  if (isLoading || !data) return <div>Loading...</div>

  return (
    <Link
      to={`/pokemon/${id}`}
      className={classNames(styles.container, {
        [styles.active]: isActive
      })}
    >
      <div className={styles.image}>
        <img src={data.sprites.front_default ?? ''} alt='pokemon_image' />
      </div>
      <div className={styles.name}>{data?.name}</div>
    </Link>
  )
}
