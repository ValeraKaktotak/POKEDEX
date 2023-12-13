import { type FC } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import styles from './PokemonPage.module.css'

import { Button } from '../../common/buttons/Button/Button'
import { useRequestPokemonEncountersQuery } from '../../utils/api/hooks/encounters'
import { useRequestPokemonQuery } from '../../utils/api/hooks/pokemon'
import { getPokemonId } from '../../utils/helpers/getPokemonId'
import { PokemonStats } from '../PokemonsPage/PokemonInfo/PokemonStats/PokemonStats'

export const PokemonPage: FC = () => {
  const params = useParams<{ pokemonId: string }>()
  const navigate = useNavigate()

  const { data: pokemonData, isLoading: pokemonLoading } =
    useRequestPokemonQuery(Number(params.pokemonId))

  const {
    data: pokemonEncountersData,
    isLoading: pokemonEvolutionDataLoading
  } = useRequestPokemonEncountersQuery({
    id: Number(params.pokemonId),
    isLoaded: !pokemonLoading
  })

  const isData = pokemonData // && pokemonEncountersData
  const isLoading = pokemonLoading && pokemonEvolutionDataLoading

  if (isLoading || !isData) return <div>LOADING...</div>

  return (
    <div className={styles.page}>
      {pokemonData && (
        <>
          <div className={styles.name_container}>
            <div>{pokemonData.name}</div>
            <div className={styles.page_container_number}>
              {getPokemonId(pokemonData.id)}
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.image}>
              <img
                src={pokemonData.sprites.front_default ?? ''}
                alt='pokemon_image'
              />
            </div>
            <PokemonStats
              stats={pokemonData.stats}
              abilities={pokemonData.abilities}
            />
          </div>
        </>
      )}
      <div className={styles.buttons_container}>
        {pokemonData.id > 1 && (
          <Button
            onClick={() => {
              navigate(`/pokemon/${pokemonData.id - 1}`)
            }}
          >
            PREV
          </Button>
        )}

        <Button
          onClick={() => {
            navigate(`/pokemon/${pokemonData.id + 1}`)
          }}
        >
          NEXT
        </Button>
      </div>
    </div>
  )
}
