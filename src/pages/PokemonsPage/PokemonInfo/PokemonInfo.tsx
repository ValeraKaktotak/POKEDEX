import { type FC,useContext, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

import { Button } from '../../../common/buttons/Button/Button'
import { useRequestPokemonQuery } from '../../../utils/api/hooks/pokemon'
import { StoreContext } from '../../../utils/context/store'
import { useAddDocumentsMutation } from '../../../utils/firebase/hooks/useAddDocumentsMutation'
import { getPokemonId } from '../../../utils/helpers/getPokemonId'

import { PokemonStats } from './PokemonStats/PokemonStats'
import { PokemonTypes } from './PokemonTypes/PokemonTypes'

import styles from './PokemonInfo.module.css'

interface IPokemonInfo {
  id: number
  onClose: () => void
}

export const PokemonInfo: FC<IPokemonInfo> = ({ id, onClose }) => {
  const { data: pokemon, isLoading } = useRequestPokemonQuery(id)
  const { store } = useContext(StoreContext)
  const navigate = useNavigate()
  const AddDocumentsMutation = useAddDocumentsMutation()
  const blockRef = useRef<HTMLDivElement>(null)
  const closeHandleClickOutside = (event: MouseEvent): void => {
    if (blockRef.current && !blockRef.current.contains(event.target as Node)) {
      // Клик был вне блока
      onClose()
    }
  }

  useEffect(() => {
    // Добавляем обработчик события клика при монтировании компонента
    document.addEventListener('click', closeHandleClickOutside)

    // Убираем обработчик события клика при размонтировании компонента
    return () => {
      document.removeEventListener('click', closeHandleClickOutside)
    }
  }, [])

  if (isLoading || !pokemon) {
    return null
  }

  return (
    <div ref={blockRef} className={styles.pokemon_info_container}>
      <div className='mb-2 text-right'>
        <strong
          tabIndex={0}
          role='button'
          onKeyPress={(event) => {
            if (event.key === 'Enter') {
              event.stopPropagation()
              onClose()
            }
          }}
          onClick={(event) => {
            event.stopPropagation()
            onClose()
          }}
          className='align-center alert-del cursor-pointer text-xl'
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
        Go to evolutions
      </Button>
      {store.session.isLogin && (
        <Button
          loading={AddDocumentsMutation.isLoading}
          onClick={(event) => {
            event.stopPropagation()
            AddDocumentsMutation.mutate({
              collectionName: 'pokemons',
              data: {
                pokemonID: pokemon.id,
                pokemonName: pokemon.name,
                uid: store.userProfile?.uid
              },
              close: onClose
            })
          }}
        >
          Add to team
        </Button>
      )}
    </div>
  )
}
