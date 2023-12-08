import type { FC } from 'react'

import { useRequestPokemonQuery } from '../../../utils/api/hooks/pokemon'

import { useNavigate } from 'react-router-dom'
import { Button } from '../../../common/buttons/Button/Button'
import { getPokemonId } from '../../../utils/helpers/getPokemonId'
import styles from './PokemonInfo.module.css'
import { PokemonStats } from './PokemonStats/PokemonStats'
import { PokemonTypes } from './PokemonTypes/PokemonTypes'

interface IPokemonInfo {
  id: number
  onClose: () => void
}

export const PokemonInfo: FC<IPokemonInfo> = ({ id, onClose }) => {
  const { data: pokemon, isLoading } = useRequestPokemonQuery(id)
  const navigate = useNavigate()
  if (isLoading || !pokemon) {
    return null
  }

  return (
    <div className={styles.pokemon_info_container}>
      <div className='text-right mb-2'>
        <strong
          tabIndex={0}
          role='button'
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              onClose()
            }
          }}
          onClick={(e) => {
            e.stopPropagation()
            onClose()
          }}
          className='text-xl align-center cursor-pointer alert-del'
        >
          &times;
        </strong>
      </div>
      <div className={styles.pokemon_info_title}>
        <div className={styles.pokemon_info_name}>{pokemon.name}</div>
        <div className={styles.pokemon_info_number}>
          {getPokemonId(pokemon.id)}
        </div>
      </div>
      <div className={styles.pokemon_info_title_image}>
        <img src={pokemon.sprites.front_default ?? ''} alt='pokemon_image' />
      </div>
      <PokemonTypes types={pokemon.types} />
      <PokemonStats stats={pokemon.stats} abilities={pokemon.abilities} />
      <Button
        onClick={() => {
          navigate(`/pokemon/${pokemon.id}`)
        }}
      >
        ENTER
      </Button>
    </div>
  )
}
