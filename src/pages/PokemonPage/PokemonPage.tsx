import { type FC } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import styles from './PokemonPage.module.css'

import { Button } from '../../common/buttons/Button/Button'
import { useRequestPokemonQuery } from '../../utils/api/hooks/pokemon'
import { useRequestPokemonSpecies } from '../../utils/api/hooks/pokemon-species/id'
import { getPokemonId } from '../../utils/helpers/getPokemonId'
import { PokemonStats } from '../PokemonsPage/PokemonInfo/PokemonStats/PokemonStats'
import { PokemonEvolutionChain } from './PokemonEvolutionChain'

export const PokemonPage: FC = () => {
  const params = useParams<{ pokemonId: string }>()
  const navigate = useNavigate()

  const { data: pokemonData, isLoading: pokemonLoading } =
    useRequestPokemonQuery(Number(params.pokemonId))

  const { data: pokemonSpeciesData, isLoading: pokemonSpeciesLoading } =
    useRequestPokemonSpecies({
      id: Number(params.pokemonId),
      isLoaded: !pokemonLoading
    })

  const chainId = Number(
    pokemonSpeciesData?.evolution_chain.url.split('/').splice(-2, 1).join('')
  )

  const isData = pokemonData && pokemonSpeciesData
  const isLoading = pokemonLoading && pokemonSpeciesLoading

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
          <PokemonEvolutionChain
            chainId={chainId}
            pokemonId={Number(params.pokemonId)}
          />
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
